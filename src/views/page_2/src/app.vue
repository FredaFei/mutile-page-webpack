<template>
  <div id="main">
    <h1 class="mt20 ml10 mr100">{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'page_2'
    }
  },
  created() {
    this.$util.setSize()
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: red;
}
</style>
