<template>
  <div class="footer">
      <h1> {{title1}}</h1>
      <h2>{{title}}</h2>
      <h2></h2>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    // 从父组件获取传递的值
    props:{
        title:{
            type:String
        }
    },
    data () {
        return {
            title1:'我是footer'
        }
    }
}
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 100px;
        background-color: blue;
    }
</style>
