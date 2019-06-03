<template>
	<view class="home">
		<v-header :status=status></v-header>
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			
			<view class="iconfont icon-icon_workset"></view>
		</view>
	</view>
</template>

<script>
	import headers from '@/components/header/header.vue'
	
	
	export default {
		components: {
			'v-header': headers
		},
		data() {
			return {
				title: 'Hello',
				partA: [],
				partB: [],
				partC: [],
				partD: [],
				headerStatus: 'isSearch', // header的显示方式
				swipeList:  [], // 轮播数据
				newProduct: [], // 新品推荐数据
				toneProduct: [], // 品质推荐数据
				brandProduct: [], // 品牌推荐数据
				guessProduct: [], // 猜你喜欢数据
				status: 'isSearch',
			}
		},
		onLoad() {
			this.getdata()
		},
		methods: {
			getdata() {
				// 获取广告代码
				this.getRequest.getAds((res) => {
					if (res.data.status === 200) {
						// 轮播数据
						this.swipeList = res.data.data.f1
						// 新品推荐数据
						this.newProduct = res.data.data.f6
						// 品质推荐数据
						this.toneProduct = res.data.data.f7
						// 品牌推荐数据
						this.brandProduct = res.data.data.f8
						// 保存聚合区的code和图像
						this.partA = res.data.data.f2[0]
						sessionStorage.setItem('codeA', res.data.data.f2[0].typeCode)
						this.partB = res.data.data.f3[0]
						sessionStorage.setItem('codeB', res.data.data.f3[0].typeCode)
						this.partC = res.data.data.f4[0]
						sessionStorage.setItem('codeC', res.data.data.f4[0].typeCode)
						this.partD = res.data.data.f5[0]
						sessionStorage.setItem('codeD', res.data.data.f5[0].typeCode)
					} else {
						this.Toast('数据获取失败请稍后再试', 'error')
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.home {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
