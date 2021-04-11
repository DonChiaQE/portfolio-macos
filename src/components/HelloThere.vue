/* eslint-disable */
<template>
    <div class="flex-container" id="flex-container">
        <div class="about-me" id="container" :class="{ fullscreen: isFullscreen, close: isShown }">
            <div class="top-bar" id="top-bar" v-on:dblclick="toggleSize">
                <div class="triple-button">
                    <div class="button-red" v-on:click="toggleShow"></div>
                    <div class="button-yellow"></div>
                    <div class="button-green" v-on:click="toggleSize"></div>
                </div>
            </div>
            <div class="bar"></div>
            <!-- <div class="content">
                            <div class="circle">
                                <img src="data:image/jpeg;base64,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"/>
                            </div>
                            <div class="welcome-message">
                                <div class="hello">
                                    Hey There 
                                </div>
                                <div class="welcome">
                                    I am Don from Singapore and I love programming for iOS, in particular the SwiftUI framework. I also enjoy web development and hence I have decided to impart some of my web development knowledge over to you through this short experience!
                                </div>
                            </div>
                        </div> -->
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
}
</style>

<script>
export default {
    data: function() {
        return {
            isFullscreen: false,
            isShown: false
        }
    },
    methods: {
        toggleSize: function() {
            this.isFullscreen = !this.isFullscreen;
        },
        toggleShow: function() {
            this.isShown = !this.isShown
        }
    },
    mounted: function() {
        
    }
}
</script>