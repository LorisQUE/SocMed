<template>
  <header id="header">
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">A propos</router-link>
  </header>

  <router-view />
  
  <footer id="footer"></footer>
</template>

<script>
export default {
  name: 'App'
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
}

#footer {
  position: absolute;
  bottom: 0;
}

#header {
  display: flex;
  align-items: center;
  column-gap: 2em;
}

#header a {
  color: black;
  text-decoration: none;
}

</style>
