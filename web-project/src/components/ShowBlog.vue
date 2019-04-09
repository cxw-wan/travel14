<template>
  <div id="showblog" v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filterBlogs" v-bind:key="blog.item" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <article>
            {{blog.body | snippet}}
        </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Showblog',
  
  data () {
    return {
      blogs:[],
      search:""
    }
  },
  created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data){
          this.blogs = data.body.slice(0,10);
      })
  },
  computed:{
      //搜索功能
      filterBlogs:function(){
          return this.blogs.filter((blog) => {
              return blog.title.match(this.search);
          })
      }
  },
  filters:{
      //局部定义过滤器 实现title大写
      "to-uppercase":function(value){
          return value.toUpperCase();
      },
      //局部定义过滤器 实现文本显示部分
      "snippet":function(value){
          return value.slice(0,100)+"...";
      }
  },
  directives:{
      //自定义局部指令 实现title随机字体颜色
      'rainbow':{
          bind(el,binfing,vnode){
              el.style.color="#"+ Math.random().toString(16).slice(2,8);
          }
      }
  }
  
}
</script>


<style scoped>
    #showblog{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
        border: 1px dotted #aaa;
    }
     #showblog a{
         color: #444;
         text-decoration: none;

     }
     input[type="text"]{
         padding: 8px;
         width: 100%;
         box-sizing: border-box;
         
     }
</style>
