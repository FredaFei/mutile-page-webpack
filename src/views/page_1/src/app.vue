<template>
  <div id="main">
    <h1>{{message}}</h1>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      message: 'page_1'
    }
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
