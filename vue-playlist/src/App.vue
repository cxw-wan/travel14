<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="helloworld">Helloworld</router-link></li>
      <li><router-link to="header">header</router-link></li>
      <li><router-link to="users">users</router-link></li>
      <li><router-link to="footer">footer</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      
    }
  },
  methods:{
    
    },

  }
 

</script>

<style>

</style>
