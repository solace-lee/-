<template>
	<view class="header">
<!-- 搜索型样式 -->
		<view class="header_search" v-if="isSearch">
		<!-- 定位图标 -->
				<view class="iconfont icon icon-icon_GPS" v-if="hasGetLocation"></view>
		<!-- 返回图标 -->
				<view class="iconfont icon-icon_left" v-if="hasBack" @click="goBack"></view>
		<!-- 地点显示 -->
		<!-- <show-address v-if="hasGetLocation"></show-address> -->
		<!-- 搜索框 -->
		<view class="search_box" @click="goSearch">
			<view class="iconfont icon-icon_search"></view>
			<input type="text" class="gosearch" disabled placeholder="更多好货助力">
		<!-- <cube-input v-model="value" disabled placeholder="更多好货助力"></cube-input> -->
		</view>
		<!-- 消息图标 -->
				<view class="iconfont icon-icon_dmail" v-if="msgBtn" @click="goMsg"></view>
		</view>
		
		

		<!-- 标题型样式 -->
		<view class="header_title" v-if="!isSearch">

		<view class="left_area">
		<!-- 返回图标 -->
				<view class="iconfont icon-icon_left" v-if="hasBack" @click="goBack"></view>
		<!-- 地点显示 -->
		<show-address v-if="hasGetLocation"></show-address>
		</view>

		<!-- 标题 -->
		<view class="title_area" v-if="showTitle">{{title}}</view>

		<view class="right_area">
		<!-- 购物车图标 -->
				<view class="iconfont icon-icon_collect" v-if="goCarBtn" @click="goCar"></view>
		<!-- 搜索图标 -->
				<view class="iconfont icon-icon_search" v-if="searchBtn" @click="goSearch"></view>
		<!-- 管理按钮 -->
		<view class="manage" v-if="complete" @click="goEdit">管理</view>
		<!-- 完成按钮 -->
		<view class="manage" v-if="manage" @click="goEdit">完成</view>
		<!-- 消息图标 -->
				<view class="iconfont icon-icon_dmail" v-if="msgBtn" @click="goMsg"></view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				default: '标题',
				type: String
			},
			status: {
				default: '',
				type: String
			},
			manage: {
				default: false,
				type: Boolean
			},
			backUrl: {
				default: '',
				type: String
			},
		},
		data() {
			return {
				isSearch: false,
				hasBack: false,
				goCarBtn: false,
				complete: false,
				hasGetLocation: false,
				searchBtn: false,
				showTitle: false,
				msgBtn: false
			}
		},
		created() {
			//根据传入值修改显示方式
			this.changeStatus()
		},
		methods: {
			//根据传入值修改显示方式
			changeStatus () {
				switch (this.status) {
				case 'isCar': // 购物车类型
					this.goCarBtn = false
					this.hasBack = true
					this.showTitle = true
					this.msgBtn = true
					break
				case 'isSearch': // 首页类型
					this.isSearch = true
					this.hasGetLocation = true
					this.msgBtn = true
					break
				case 'BackSearch': // 带搜索带返回按钮类型
					this.isSearch = false
					this.hasGetLocation = true
					this.hasBack = true
					this.searchBtn = true
					this.showTitle = true
					this.msgBtn = true
					break
				case 'noTitle': // 带搜索带返回按钮类型
					this.isSearch = false
					this.hasBack = true
					break
				case 'onlyTtitle': // 仅带标题
					this.isSearch = false
					this.hasBack = true
					this.showTitle = true
					break
				default:
					break
				}
			
			}
			
		}
	}
</script>

<style lang="less" scoped>
.header {
	width: 100%;
	background: #00ae87;
	height: 96upx;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
}

// 搜索型样式
.header_search {
	width: 100%;
	height: 100%;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	color: inherit;
	.iconfont {
		flex: 1;
		font-size: 36upx;
		color: #fff;
	}
	.search_box {
		flex: 6;
		width: auto;
		margin: 0 12upx;
		height: 68upx;
		overflow: hidden;
		border-radius: 34upx;
		overflow: hidden;
		background: #fff;
		display: flex;
		align-items: center;
		.iconfont {
			color: #ccc;
			font-size: 32upx;
			flex: none;
			width: 60upx;
		}
	}
	
	input {
		height: 68upx;
		background: #fff;
		line-height: 68upx;
	}
	.gosearch:placeholder {
		color: #ccc;
		font-size: 24upx;
		line-height: 68upx;
	}
}



// 标题型样式
.header_title {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: inherit;
	position: relative;
	.left_area {
		display: flex;
		align-items: center;
	}
	.iconfont {
		font-size: 32upx;
		margin: 0 16upx;
		z-index: 10;
	}
	.title_area {
		font-size: 36upx;
		position: absolute;
		height: 100%;
		width: 100%;
		line-height: 96upx;
		text-align: center;
	}
	.right_area {
		display: flex;
		align-items: center;
	}
	.icon
	.iconfont {
		font-size: 36upx;
		margin-left: 0;
		margin-right: 24upx;
	}
	.manage {
		font-size: 28upx;
		margin-left: 0;
		z-index: 10;
		margin-right: 24upx;
	}
}
</style>