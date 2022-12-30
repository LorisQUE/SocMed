<template>
    <div class="toot-card">
        <div class="toot-card-top">
            <div class="profile-picture-container">
                <img class="profile-picture" src="https://http.cat/200" />
            </div>
            <div class="information-container">
                <div class="information-top-bar">
                    <span class="display-name">Pseudonyme</span>
                    <span class="name">@user1234</span>
                    <span class="data">28/12/22 15:59</span>
                </div>
                <div class="information-text">
                    Lorem ipsum bidibim bidibum (c'est du latin)
                    Lorem ipsum bidibim bidibum (c'est du latin)
                    Lorem ipsum bidibim bidibum (c'est du latin)
                    Lorem ipsum bidibim bidibum (c'est du latin)
                    Lorem ipsum bidibim bidibum (c'est du latin)
                    Lorem ipsum bidibim bidibum (c'est du latin)
                    Lorem ipsum bidibim bidibum (c'est du latin)
                </div>
            </div>
        </div>
        
        <div class="toot-card-bottom">
            <button>Aimer</button>
            <button>Commenter</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TootCard',
        props: ['id']
    }
</script>

<style scoped>
    .toot-card {
        display: flex;
        flex-direction: column;

        height: 100%;
        width: 100%;

        padding: 1em;
        box-sizing: border-box;
        border-radius: 1em;

        cursor: pointer;
        transition: 250ms;

        background-color: white;
        border: 1px solid gray;
        /* box-shadow: .3em .3em .7em gray; */
    }

    .toot-card:hover {
        background-color: whitesmoke;
    }

    .toot-card .toot-card-top {
        height: 100%;
        width: 100%;
        display: flex;
    }

    .toot-card .toot-card-top .profile-picture-container {
        display: flex;

        height: 100%;
        width: 5em;
    }
    
    .toot-card .toot-card-top .profile-picture-container .profile-picture {
        height: 3em;
        width: 3em;

        border-radius: 50%;
    }

    .toot-card .toot-card-top .information-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    
    .toot-card .toot-card-top .information-top-bar {
        display: flex;
        column-gap: .5em;
        height: 2em;
        width: 100%;
    }

    .toot-card .toot-card-top .information-text {
        height: 100%;
        width: 100%;
        display: flex;
    }
    
    .toot-card .toot-card-bottom {
        height: 1.5em;
        width: 100%;
        display: flex;
        justify-content: center;
        column-gap: 1em;
    }
</style>