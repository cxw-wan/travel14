<template>
  <div id="singleblog">
            <h1>{{bloga.title}}</h1>
            <article>{{bloga.body}}</article>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data () {
    return {
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts" + this.id)
      .then(function(data){
          this.blog = data.body;
      })
  }
}

</script>


<style scoped>
    #singleblog{
        max-width: 840px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
</style>
