<template>
  <div id="home-page">
    <div id="home-page-toot-card-list-container">
      <TootCardList />
    </div>
  </div>
</template>

<script>
  import TootCardList from '../components/TootCardList.vue';

  export default {
    name: 'HomePage',
    components: {
      TootCardList
    }
  };
</script>

<style scoped>
  #home-page{
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #home-page-toot-card-list-container{
    height: 100%;
    width: 40vw;
  }
</style>