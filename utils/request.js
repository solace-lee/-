import { http } from '@/utils/http-request/index.js'
import { apis } from '@/utils/apis.js'
import { configApi, gateway } from '@/utils/config.js'

class GetRequest {
	// 首页广告数据
	getAds(callback, code) {
		const districtId = sessionStorage.getItem('districtId') || '0'
		const config = {
			districtId: districtId,
			code: code || 12345
		}
		http.get(gateway.SEARCH + apis.ads, config).then(res => {
			callback(res)
		})
	}
	
	
}

export {
	GetRequest
}
