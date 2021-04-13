<template>
    <div id="app">
        <TopNav />
        <div class="screen" id="screen" style="position: relative;">
            <nossaflex-modal id="noss" v-if="$store.getters.isShownNossaflex" style=" position: absolute; left:50% !important; margin-left:-45vw; top:50% !important; margin-top:-25vh;" @click.native="$store.commit('zIndexIncrement', 'noss', 'stickies', 'photos')"/>
            <photos-modal id="photos" v-if="$store.getters.isShownPhotos" style=" position: absolute;" @click.native="$store.commit('zIndexIncrement', 'photos', 'stickies', 'noss')"/>
            <stickies id="stickies" v-if="$store.getters.isShownStickies" style=" position: absolute;" @click.native="$store.commit('zIndexIncrement', 'stickies', 'noss', 'photos')"/>
        </div>
        <navbar/>
    </div>
</template>

<script>
import NossaflexModal from './components/NossaflexModal.vue'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import PhotosModal from './components/PhotosModal.vue'
import Stickies from './components/Notepad.vue'

export default {
    name: 'App',
    data: function() {
        return {

        }
    },
    components: {
        NossaflexModal,
        PhotosModal,
        Navbar,
        TopNav,
        Stickies
    },
    methods: {
        focusPhotos() {
            document.getElementById('photos').style.zIndex = this.$store.getters.zIndex+1;
            document.getElementById('noss').style.zIndex = this.$store.getters.zIndex;
            document.getElementById('stickies').style.zIndex = this.$store.getters.zIndex;
        },
        focusNoss() {
            document.getElementById('noss').style.zIndex = this.$store.getters.zIndex+1;
            document.getElementById('photos').style.zIndex = this.$store.getters.zIndex;
            document.getElementById('stickies').style.zIndex = this.$store.getters.zIndex;
        },
        focusStickies() {
            document.getElementById('stickies').style.zIndex = this.$store.getters.zIndex+1;
            document.getElementById('photos').style.zIndex = this.$store.getters.zIndex;
            document.getElementById('noss').style.zIndex = this.$store.getters.zIndex;
        },
        onClickLog() {
            alert("Hello! I am an alert box!!");
        }
    },
    computed() {

    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    overflow: hidden;
}

.screen {
    height: 100vh;
    width: 100%;
}

.hidden {
    display: none !important;
}

body {
    margin: 0;
    padding: 0;
    overflow: hidden;
}

body {
    background-image: url('./assets/light.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

@media (prefers-color-scheme: dark) {
    body {
        background-image: url('./assets/dark.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
}

.bar-container {
    width: auto;
    height: 70px;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgb(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.wrapper {
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.icon {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    background: white;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
}

.icon:hover {
    cursor: pointer;
}
</style>
