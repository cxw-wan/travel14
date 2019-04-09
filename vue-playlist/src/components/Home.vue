<template>
  <div id="home">
   <app-users v-bind:user="user"></app-users>
   <!--    从父组件获取引用 传递给子组件 v-bind:list="list"  v-bind:title="title"-->
   <!--    从子组件中获取传递的参数 v-on:titlechange="updatetitle()"-->
   <app-header v-bind:list="list"  v-bind:title="title" v-on:titlechange="updatetitle($event)"></app-header>
   <!--    从父组件获取值 传递给子组件 v-bind:title="title"  -->
   <app-footer v-bind:title="title"></app-footer>
   
  </div>
  
</template>
<!--传递引用:array 
    传递值:string number boolean
    
    区别：传递引用，删除一个数组，会影响其他的数组
    传值不会影响
-->
<script>
//局部注册组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    'app-users':Users,
    'app-header':Header,
    'app-footer':Footer
  },
  data () {
    return {
      list:[
          {
        name:'vue',
        position:'123',
        show:false
      },
      {
        name:'vue',
        position:'123',
        show:false
      },
      {
        name:'vue',
        position:'123',
        show:false
      },
      {
        name:'vue',
        position:'123',
        show:false
      },
      {
        name:'vue',
        position:'123',
        show:false
      }
      ],
      //给定一个空数组
      user:[

      ],
      title:'传递的是一个值，（number string boolean）'
    }
  },
  methods:{
    updatetitle(title){
      this.title=title
    }
  },
  //在created方法中获取http引用的数据填入user里面
  created(){
      this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data) => {
          this.user = data.body
      })
  }
 
}
</script>

<style>

</style>
