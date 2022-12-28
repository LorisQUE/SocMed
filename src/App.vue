<template>
  <Header />

  <router-view />
  
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header, #footer {
  width: 100%;
  height: 7vh;
  background-color: lightgray;
  padding: 0 2em 0 2em;
  box-sizing: border-box;
}
</style>
