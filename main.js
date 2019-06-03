import Vue from 'vue'
import App from './App'
import { GetRequest } from './utils/request.js'

Vue.config.productionTip = false

Vue.prototype.getRequest = new GetRequest()

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
