<template>
    <div class="wrapper" :class="{hidden: $store.getters.isFullscreenNossaflex && $store.getters.isShownNossaflex || $store.getters.isFullscreenPhotos && $store.getters.isShownPhotos || $store.getters.isFullscreenStickies && $store.getters.isShownStickies}">
          <div class="bar-container">
              <div class="icon-nossaflex icon" v-on:click="showNossaflex"></div>
              <div class="icon-photo icon" v-on:click="showPhotos"></div>
              <div class="icon-mail icon" v-on:click="showMail"></div>
              <div class="icon-wip icon"></div>
              <div class="icon-wip icon"></div>
              <div class="icon-stickies icon" v-on:click="showStickies"></div>
          </div>
        </div>
</template>

<style scoped>
.hidden {
    display: none !important;
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

@media only screen and (max-width: 600px) { 
    .bar-container {
        width: 100vw !important;
        margin-left: 20px;
        margin-right: 20px;
        height: 10vw !important;
        padding-top: 4vw;
        padding-bottom: 4vw;
    }
    .icon {
        width: 10vw !important;
        height: 10vw !important;
        margin-left: 5px !important;
        margin-right: 5px !important;
    }
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
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
}

.icon:hover{
    cursor: pointer;
}

.icon-wip {
    background-image: url('../assets/Icons/WIP.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-wip:hover {
    cursor: not-allowed;
}

.icon-nossaflex {
    background-image: url('../assets/Icons/NossaflexLight.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-photo {
    background-image: url('../assets/Icons/Photo.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-mail {
    background-image: url('../assets/Icons/Mail.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-stickies {
    background-image: url('../assets/Icons/Stickies.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

@media (prefers-color-scheme: dark) {
    .icon-nossaflex {
    background-image: url('../assets/Icons/NossaflexDark.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
}
</style>

<script>
export default {
    props: {
        shownProp: Boolean
    },
    data() {
        return {
            showHello: this.shownProp
        }
    },
    methods: {
        toggleShow() {
            this.showHello = false;
            console.log(this.showHello)
            console.log("printed from navbar")
        },
        showNossaflex() {
            this.$store.commit('changeActiveWindow', 'NOSSAFLEX')
            this.$store.commit('toggleShownNossaflex', true)
            this.$store.commit('zIndexIncrement', 'noss')
        },
        showPhotos() {
            this.$store.commit('changeActiveWindow', 'Photos')
            this.$store.commit('toggleShownPhotos', true)
            this.$store.commit('zIndexIncrement', 'photos')
        },
        showStickies() {
            this.$store.commit('changeActiveWindow', 'Stickies')
            this.$store.commit('toggleShownStickies', true)
            this.$store.commit('zIndexIncrement', 'stickies')
        },
        showMail() {
            this.$store.commit('changeActiveWindow', 'Mail')
            this.$store.commit('toggleShownMail', true)
            this.$store.commit('zIndexIncrement', 'mail')
        }
    },
    mounted: function() {
        
    }
}
</script>