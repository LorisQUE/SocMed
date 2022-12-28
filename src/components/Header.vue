<template>
    <div id="header" >
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">A propos</router-link>
    </div>
</template>

<script>
   export default {
    name: 'HeaderComponent'
   }
</script>

<style scoped>
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