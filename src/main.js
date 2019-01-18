// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes'
import VueResource from 'vue-resource'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false


Vue.http.options.emulateJSON = true;  //http请求设置
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' //http请求头设置form表单提交
};


/* eslint-disable no-new */
const router = new VueRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes,
    mode:'history',
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
