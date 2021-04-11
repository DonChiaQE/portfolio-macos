/* eslint-disable */
<template>
    <div class="flex-container" id="flex-container">
        <div class="about-me" id="container" :class="{ fullscreen: $store.getters.isFullscreenNossaflex, close: !$store.getters.isShownNossaflex}">
            <div class="top-bar" id="top-bar" v-on:dblclick="$store.commit('toggleFullscreenNossaflex')">
                <div class="triple-button">
                    <div class="button-red" v-on:click="$store.commit('toggleShownNossaflex', false)"></div>
                    <div class="button-yellow"></div>
                    <div class="button-green" v-on:click="$store.commit('toggleFullscreenNossaflex')"></div>
                </div>
            </div>
            <div class="bar"></div>
            <div class="content">
                <!-- <textarea class="textarea-content">

                </textarea> -->
                <div class="scroll-container">
                    <div class="header">NOSSAFLEX</div>
                    <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum lacinia turpis, eu ullamcorper ligula eleifend sed. Cras at diam eros. Phasellus dui nulla, consequat vestibulum nisl nec, efficitur sodales dui. Vivamus sit amet tellus ac enim imperdiet fringilla. Vivamus feugiat fermentum elit in laoreet. Nulla cursus arcu et fermentum efficitur. Sed euismod ultrices scelerisque. Sed malesuada eget nisl nec venenatis. Proin congue vehicula nulla, et auctor nisi. Duis eget leo massa. Nunc at gravida nibh.</div>
                    <div class="paragraph">Mauris a consectetur lorem. Vestibulum arcu est, imperdiet a sodales eu, feugiat nec lacus. Quisque odio metus, consequat eu neque eu, volutpat finibus elit. Vestibulum pellentesque porta sapien, et accumsan ex ultrices sit amet. Nunc et lorem mollis, dictum libero ac, sollicitudin arcu. Morbi porta lacus eu feugiat tempus. Donec ut libero quam. Curabitur in nibh metus. Aliquam in nisi est. Etiam eget feugiat mauris, non sodales purus. Suspendisse pharetra scelerisque sem, vitae fermentum magna mattis vitae. Curabitur mattis libero vel rutrum dictum.</div>
                    <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum lacinia turpis, eu ullamcorper ligula eleifend sed. Cras at diam eros. Phasellus dui nulla, consequat vestibulum nisl nec, efficitur sodales dui. Vivamus sit amet tellus ac enim imperdiet fringilla. Vivamus feugiat fermentum elit in laoreet. Nulla cursus arcu et fermentum efficitur. Sed euismod ultrices scelerisque. Sed malesuada eget nisl nec venenatis. Proin congue vehicula nulla, et auctor nisi. Duis eget leo massa. Nunc at gravida nibh.</div>
                    <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum lacinia turpis, eu ullamcorper ligula eleifend sed. Cras at diam eros. Phasellus dui nulla, consequat vestibulum nisl nec, efficitur sodales dui. Vivamus sit amet tellus ac enim imperdiet fringilla. Vivamus feugiat fermentum elit in laoreet. Nulla cursus arcu et fermentum efficitur. Sed euismod ultrices scelerisque. Sed malesuada eget nisl nec venenatis. Proin congue vehicula nulla, et auctor nisi. Duis eget leo massa. Nunc at gravida nibh.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    touch-action: none;
}

.about-me {
    height: 300px;
    width: 600px;
    border-radius: 15px;
    background: #F3F2F2;
    overflow: hidden;
    border: 1px solid #dadada;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
    transition: all 0.5s ease;
    margin: 0;
    margin-left: 10px;
    margin-right: 10px;
}

.close {
    display: none;
}

.show {
    display: block;
}

.top-bar {
    display: flex;
    height: 40px;
    width: 100%;
    background: #ECECED;
}

.triple-button {
    display: flex;
    padding-left: 15px;
    align-items: center;
    width: 50px;
    justify-content: space-between;
}

.button-red {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #ed6a06;
    display: flex;
    justify-content: center;
    align-items: center
}

.button-yellow {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #f5bf50;
}

.button-green {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #62c454;
}

.button-red:hover {
    cursor: pointer;
}

.button-yellow:hover {
    cursor: pointer;
}

.button-green:hover {
    cursor: pointer;
}

.textarea-content {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    caret-color: black;
    color: black;
}

.bar {
    background: #dadada;
    height: 1px;
    width: 100%;
}

.circle {
    background: #f1f0f2;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    height: 140px;
    width: 140px;
    border-radius: 50%;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    padding-bottom: 30px;
}

.header {
    font-weight: 700;
    font-size: 28px;
    padding-top: 10px;
}

.scroll-container {
    overflow: scroll;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
}

.paragraph {
    font-weight: 100;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.paragraph:last-child {
    padding-bottom: 80px;
}

.fullscreen {
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-right: 0;
}

@media (prefers-color-scheme: dark) {
    .about-me {
        border: 1px solid #0B0A0B;
        background: #1C1C1D;
    }
    .top-bar {
        background: #333333;
    }
    .bar {
        background: #0B0A0B
    }
    .hello {
        color: white
    }
    .textarea-content {
        caret-color: white;
        color: white;
    }
    .header {
        color: white;
    }
    .paragraph {
        color: white;
    }
}
</style>

<script>
export default {
    props: {
        // shownProp: Boolean
    },
    data: function() {
        return {

        }
    },
    methods: {
        
    },
    mounted: function() {
        
    }
}
</script>