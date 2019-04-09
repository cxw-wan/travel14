<template>
  <div class="header">
      <h1 @click="change">{{title1}}{{title}}</h1>
      <ul>
          <!-- 调用父组件专递的引用 -->
          <li v-for="list1 in list" v-bind:key="list1.item" @click="list1.show=!list1.show">
              <p>{{list1.name}}</p>
              <p v-show="list1.show">{{list1.position}}</p>
          </li>
      </ul>
  </div>

</template>

<script>
export default {
    name: 'Header',
    //获取到父组件传递的引用
    props:{
        list:{
            type:Array,
            required:true
        },
        title:{
            type:String
        }
    },
    data () {
        return {
            title1:'我是header'
        }
    },
    methods:{
        //向父组件传递值
        change:function(){
            // this.title="change"
            this.$emit("titlechange","向父组件传值");
        }
    },
    //组件生命周期
    // beforeCreate: function(){
    //     alert("组件实例化之前执行的函数");
    // },
    // created: function(){
    //     alert("组件实例化完毕，但页面未显示");
    // },
    // beforeMount: function(){
    //     alert("组件挂载前,页面未展示，但是虚拟dom已经配置");
    // },
    //  mounted: function(){
    //     alert("组件挂载后,此方法执行，页面展示");
    // },
    //  beforeUpdate: function(){
    //     alert("组件更新前,页面未更新，但是虚拟dom已经配置");
    // },
    //  updated: function(){
    //     alert("组件更新,此方法执行后，页面展示");
    // },
    //  beforeDestroy: function(){
    //     alert("组件销毁前");
    // },
    //  destroyed: function(){
    //     alert("组件销毁");
    // }
}
</script>

<style scoped>
     .header{
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
    }
    li{
        flex-grow: 1;
        flex-basis: 200px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>
