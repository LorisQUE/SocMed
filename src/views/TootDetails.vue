<template>
    <div id="toot-details-page">
      <h2>Détails du toot</h2>
      <i>Page de détail du message, sur la route "/toot-detail/<b>{{ id }}</b>"</i>
    </div>
  </template>
  
  <script>
    export default {
        props: ['id'],
        created() {
            console.info(`Le toot a comme identifiant ${this.id}.`);
        }
    }
  </script>