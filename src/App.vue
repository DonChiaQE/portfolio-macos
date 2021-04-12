<template>
    <div id="app">
        <TopNav />
        <div class="screen" id="screen" style="position: relative;">
            <nossaflex-modal id="noss" v-if="$store.getters.isShownNossaflex" style="z-index: 1; position: absolute; left: 50px; top: 50px;" @click.native="focusNoss" @mousedown="focusNoss" @mousemove="focusNoss"/>
            <photos-modal id="photos" v-if="$store.getters.isShownPhotos" style="z-index: 2; position: absolute;" @click.native="focusPhotos" @mousedown="focusPhotos" @mousemove="focusPhotos"/>
        </div>
        <navbar/>
    </div>
</template>

<script>
import NossaflexModal from './components/NossaflexModal.vue'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import PhotosModal from './components/PhotosModal.vue'

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
        TopNav
    },
    methods: {
        focusPhotos() {
            this.makeTop += 1
            document.getElementById('photos').style.zIndex = 4;
            document.getElementById('noss').style.zIndex = 0;
        },
        focusNoss() {
            this.makeTop += 1
            document.getElementById('noss').style.zIndex = 4;
            document.getElementById('photos').style.zIndex = 0;
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
