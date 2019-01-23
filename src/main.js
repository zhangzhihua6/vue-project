import Vue from 'vue'
// 引入路由模块
import router from './configs/router.js'
// 引入仓库
import store from './configs/store.js'
// 微信样式
import 'weui'
import 'bootstrap/dist/css/bootstrap.css'
// import 'mui/source/index.js'
// 全局样式
import './styles/app.css'
import './styles/slide.css'
import './styles/index.css'
import './styles/iscroll.css'
import './styles/slideSpacil.css'
// import './styles/mui.css'
import './styles/commone.css'
// 引入ajax库
import axios from 'axios'
// 引入jQuery库
import $ from 'jquery'



import 'mint-ui/lib/style.css'

// 把库挂载到原型链
Vue.prototype.$axios = axios
Vue.prototype.$ = $

Vue.config.productionTip = false



// Root容器
 new Vue({
  el: "#yubazha",
  // 挂载路由
  router,
  // 挂载仓库
  store,
  
  // 把App组件挂载到#app的这个节点上
  render: h => h('router-view'),
})

// console.log(vm)
// .$mount('#app')