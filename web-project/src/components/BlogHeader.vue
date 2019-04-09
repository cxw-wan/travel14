<template>
  <div id="blogheader">
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>博客</router-link>
            </li>
            <li><router-link to="/add" exact>添加博客</router-link></li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BlogHeader',
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
    ul{
        list-style-type: none;
        text-align: center;
        margin: 0;

    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
    a{
        color: #fff;
        text-decoration: none;
        padding: 12px;
        border-radius: 5px;
    }
    nav{
        max-width: 840px;
        margin: 0 auto;
        background: crimson;
        padding: 30px 0;
        margin-bottom: 40px;
    }
    .router-link-active{
        background: rgba(255, 255, 255, 0.8);
        color: #444;
    }
</style>
