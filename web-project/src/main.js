// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'



Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令 实现title随机字体颜色景  全局
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color="#"+ Math.random().toString(16).slice(2,8);
//   }
// })
//自定义指令 改变宽度和背景  全局
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == "wide"){
      el.style.maxWidth = "1260px";
    }else if(binding.value == "narrow"){
      el.style.maxWidth = "800px";
    }

    if(binding.arg == 'column'){
      el.style.background = "#666ccc";
      el.style.padding = "20px";
    }
  }
})

//自定义过滤器,使得标题大写  全局的
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
//自定义过滤器,使得文本不全部显示
// Vue.filter("snippet",function(value){
//   return value.slice(0,100)+"...";
// })

//创建路由

const router = new VueRouter({
  mode:"history",
  routes: [
    {path:"/",component:ShowBlog},
    {path:"/add",component:AddBlog},
    {path:"/blog/id",component:SingleBlog}
  ],
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
