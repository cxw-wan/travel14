// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引进路由
import VueRouter from 'vue-router'
//引用vueresource http引用
import VueResource from 'vue-resource'

import App from './App'

// 引进Home和HelloWord Users Header Footer
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

// 配置路由
const router = new VueRouter({
  //path路由路径， component是映射的组件
  routes: [
    {path:"/",component:Home},
    {path:"/helloworld",component:HelloWorld},
    {path:"/users",component:Users},
    {path:"/header",component:Header},
    {path:"/footer",component:Footer}
  ],
  //去除http含有#符号
  mode:"history"
})


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
