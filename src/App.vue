<template>
    <div id="app">
        <TopNav class="fixed" />
        <div class="screen" id="screen" style="position: relative;">
            <nossaflex-modal id="noss" v-if="$store.getters.isShownNossaflex" style=" position: absolute; left:50% !important; margin-left:-45vw; top:50% !important; margin-top:-25vh;" @click.native="focusNoss" />
            <photos-modal id="photos" v-if="$store.getters.isShownPhotos" style=" position: absolute;" @click.native="focusPhotos" />
            <stickies id="stickies" v-if="$store.getters.isShownStickies" style=" position: absolute;" @click.native="focusStickies" />
            <mail id="mail" v-if="$store.getters.isShownMail" style=" position: absolute;" @click.native="focusMail" />
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
import Mail from './components/Mail.vue'

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
        Stickies,
        Mail
    },
    methods: {
        focusPhotos() {
            this.$store.commit('changeActiveWindow', 'Photos')
            this.$store.commit('zIndexIncrement', 'photos')
        },
        focusNoss() {
            this.$store.commit('changeActiveWindow', 'NOSSAFLEX')
            this.$store.commit('zIndexIncrement', 'noss')
        },
        focusStickies() {
            this.$store.commit('changeActiveWindow', 'Stickies')
            this.$store.commit('zIndexIncrement', 'stickies')
        },
        focusMail() {
            this.$store.commit('changeActiveWindow', 'Mail')
            this.$store.commit('zIndexIncrement', 'mail')
        }
    },
    computed() {
        
    },
    mounted() {
        document.addEventListener("keydown", function(e) {
            if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
                e.preventDefault();
                if (this.$store.getters.activeWindow == "Stickies") {
                    console.log('cmd s up coz stickies on')
                } else {
                    console.log('not caught')
                }
            }
        }, false);
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }
}
</script>

<style>
body {
    touch-action: pan-y;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    width: 100%;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    flex-direction: column;
    overflow: hidden;
}

.sticky {
    position: static;
}

.screen {
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
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
