<template>
    <div id="toot-card-list-container">
        <div id="toot-card-list">
            <TootCard v-for="index in 10" :key="index"/>
        </div>
    </div>
</template>

<script>
    import TootCard from './TootCard.vue';

    export default {
        name: 'TootCardList',
        components: {
            TootCard
        }   
    };
</script>

<style scoped>
    #toot-card-list-container {
        display: flex;
        justify-content: center;
    }

    #toot-card-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1.5em;

        width: 90%;
        height: 100%;
    }
</style>