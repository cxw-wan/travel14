<template>
  <div id="app">
    <!-- <addblog></addblog> -->
    <!-- <showblog></showblog> -->
    <blogheader></blogheader>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import Showblog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'
import SingleBlog from './components/SingleBlog'

export default {
  name: 'App',
  components: {
    'addblog':AddBlog,
    'showblog':Showblog,
    'blogheader':BlogHeader,
    'singleblog':SingleBlog
  }
}
</script>

<style>

</style>

