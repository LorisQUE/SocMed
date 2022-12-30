<template>
    <div id="header" >
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">A propos</router-link>
        <router-link :to="{ name: 'tootDetails', params: { id: 33 }}">Toot</router-link>
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
  border-bottom: 1px solid gray;
}

#header a {
  color: black;
  text-decoration: none;
}
</style>