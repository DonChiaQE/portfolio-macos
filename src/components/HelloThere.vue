/* eslint-disable */
<template>
    <div class="flex-container" id="flex-container">
        <div class="about-me" id="container" :class="{ fullscreen: isFullscreen, close: !isShown}">
            <div class="top-bar" id="top-bar" v-on:dblclick="toggleSize">
                <div class="triple-button">
                    <div class="button-red" v-on:click="toggleShow"></div>
                    <div class="button-yellow"></div>
                    <div class="button-green" v-on:click="toggleSize"></div>
                </div>
            </div>
            <div class="bar"></div>
            <div class="content">
                <textarea class="textarea-content">

                </textarea>
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
    flex-grow: 2;
    align-items: center;
    height: 260px;
    justify-content: space-evenly;
}

.welcome-message {
    width: 220px;
}

.hello {
    font-size: 30px;
    font-weight: 500;
}

.welcome {
    font-size: 12px;
    font-weight: 100;
    margin-top: 10px;
    color: gray;
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
}
</style>

<script>
export default {
    props: {
        shownProp: Boolean
    },
    data: function() {
        return {
            isFullscreen: false,
            isShown: this.shownProp
        }
    },
    methods: {
        toggleSize: function() {
            this.isFullscreen = !this.isFullscreen;
        },
        toggleShow: function() {
            this.isShown = !this.isShown
            console.log(this.isShown)
            console.log("printed from hellothere")
        }
    },
    mounted: function() {
        
    }
}
</script>