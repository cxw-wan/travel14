<template>
  <div id="app">
    <img src="./assets/logo.png">
   <HelloWorld></HelloWorld>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components:{
    HelloWorld
  },

  //实现跨域..
  created(){
    //fetch
    // fetch("/apis/test/testToken.php",{
    //   method:"post",
    //   headers:{
    //     "Content-type":"application/json",
    //     token:"f4c902c9ae5a2a9d8f84868ad064e706"
    //   },
    //   body:JSON.stringify({username:"herry",password:"321321"})
    // })
    // .then(result => {
    //   console.log(result)
    // })
    // .then(data =>{
    //   console.log(data)
    // })

    //axios
    this.$axios.post("/apis/test/testToken.php",{
      username:"herry",password:"321321"
    })
    .then((data) => {
      console.log(data)
    })

  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
