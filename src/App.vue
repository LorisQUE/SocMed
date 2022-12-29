<template>
  <Header />

  <div id="view-container">
    <router-view />
  </div>
  
  <!-- <Footer /> -->
</template>

<script>
import Header from './components/Header.vue';
// import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    // Footer
  }
};
</script>

<style>
body, h2 {
  margin: 0;
}

#app {
  max-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header, #footer {
  width: 100%;
  height: 7vh;
  background-color: white;
  padding: 0 2em 0 2em;
  box-sizing: border-box;
}

#view-container{
  background-color: whitesmoke;
  min-height: calc(100vh - (7vh * 2));
  padding: 2em 0;
}
</style>
