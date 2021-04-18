/* eslint-disable */
<template>
    <interact draggable :dragOption="dragOption" class="resize-drag" :style="style" @dragmove="dragmove" @resizemove="resizemove">
        <div class="about-me" id="container" :class="{close: !$store.getters.isShownSimulator}">
            <div class="top-bar" id="top-bar">
                <div class="triple-button">
                    <div class="button-red" v-on:click="closeSimulator"></div>
                    <div class="button-yellow"></div>
                    <div class="button-green"></div>
                    
                </div>
                <div class="phone-info">
                        <b class="info" style="font-size: 14px;">iPhone SE</b>
                        <p class="info" style="font-size: 10px; color: rgb(165, 164, 164); font-weight: 700;">iOS 14.4</p>
                    </div>
            </div>
            <div class="iphone">
                <div class="iphone-screen">
                    <div class="iphone-bar">
                        <p class="bar-info">Carrier</p>
                        <p class="bar-info">{{this.time}}</p>
                        <img style="width: 22px; height: 10px;" src="../assets/battery.webp"/>
                    </div>
                    <div class="iphone-grid"></div>
                    <div class="iphone-nav">
                        <div class="iphone-icon icon-wip"></div>
                        <div class="iphone-icon icon-wip"></div>
                        <div class="iphone-icon icon-wip"></div>
                        <div class="iphone-icon icon-wip"></div>
                    </div>
                </div>
                <div class="button"></div>
            </div>
        </div>
    </interact>
</template>

<style scoped>
.iphone {
    height: 660px;
    width: 340px;
    background: rgb(26, 25, 25);
    border-radius: 55px;;
    margin-top: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.24);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: solid rgb(58,58,64, 0.5);
    flex-direction: column;
}

.iphone-screen {
    height: 490px;
    width: 285px;
    background: url('../assets/iphone-light.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.iphone-bar {
    display: flex;
    color: white;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    align-items: center;
}

.bar-info {
    padding: 0;
    margin: 0;
    color: white;
    font-size: 12px;
    font-weight: 500;
}

.iphone-grid {
    flex-grow: 1;
}

.iphone-nav {
    background: rgb(255, 255, 255, 0.4);
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
}

.iphone-icon {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    background: none;
}

.icon-wip {
    background-image: url('../assets/Icons/WIP.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.button {
    border-radius: 50%;
    border: solid rgb(106,106,106);
    height: 54px;
    width: 54px;
    margin-bottom: 5px;
}

.button:hover {
    cursor: pointer;
}

.button:active {
    background: rgb(72,72,71);
}

.resize-drag {
    box-sizing: border-box;
    background: none;
    user-select: auto;
    -ms-touch-action: auto;
    touch-action: auto;
    min-height: 40px;
    min-width: 350px;
    position: sticky;
    cursor: auto !important;
}

.about-me {
    min-width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (max-width: 600px) {
    .about-me {
        min-width: 50vw;
        width: 90vw;
        max-width: 100vw;
    }
    .scroll-container {
        padding-left: 10vw !important;
        padding-right: 10vw !important;
    }
    .expandedScrollContainer {
        padding-left: 10vw !important;
        padding-right: 10vw !important;
    }
}

.top-bar {
    display: flex;
    height: 50px;
    width: 100%;
    background: rgb(43, 42, 41);
    z-index: 10;
    border-radius: 15px;
    align-items: center;
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
    background: rgb(221,220,220);
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

.phone-info {
    margin-left: 20px;
}

.info {
    padding: 0;
    margin: 0;
    color: white;
}

@media (prefers-color-scheme: dark) {
    .about-me {
        border: 1px solid #0B0A0B;
        background: #1C1C1D;
    }
    .hello {
        color: white
    }
}
</style>

<script>
import moment from 'moment'
import interact from "interactjs";
export default {
    props: {
        // shownProp: Boolean
    },
    beforeMount() {
        setInterval(() => {
            this.time = moment().format('hh:mm A')
        }, 1000)
        setInterval(() => {
            this.date = moment().format('ddd DD MMMM')
        }, 1000)
    },
    data: function() {
        return {
            time: '',
            date: '',
            resizeOption: {
                edges: { top: true, left: true, bottom: true, right: true },
                
            },
            positions: {
                clientX: undefined,
                clientY: undefined,
                movementX: 0,
                movementY: 0
            },
            dragOption: {
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: "parent",
                        endOnly: true
                    })
                ],
                allowFrom: '.top-bar',
            },
            
            // values for interact.js transformation
            x: 0,
            y: 0,

        }
    },
    computed: {
        style() {
            return {
                height: `${this.h}px`,
                width: `${this.w}px`,
                transform: `translate(${this.x}px, ${this.y}px)`,
                '--fullscreen': window.innerHeight - 30 + "px"
            };
        }
    },
    methods: {
        dragmove(event) {
            this.x += event.dx;
            this.y += event.dy;
            this.$store.commit('zIndexIncrement', 'simulator')
        },
        resizemove(event) {
            this.w = event.rect.width;
            this.h = event.rect.height;

            this.x += event.deltaRect.left;
            this.y += event.deltaRect.top;
        },
        dragMouseDown: function(event) {
            event.preventDefault()
            // get the mouse cursor position at startup:
            this.positions.clientX = event.clientX
            this.positions.clientY = event.clientY
            document.onmousemove = this.elementDrag
            document.onmouseup = this.closeDragElement
        },
        elementDrag: function(event) {
            event.preventDefault()
            this.positions.movementX = this.positions.clientX - event.clientX
            this.positions.movementY = this.positions.clientY - event.clientY
            this.positions.clientX = event.clientX
            this.positions.clientY = event.clientY
            // set the element's new position:
            this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
            this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
        },
        closeDragElement() {
            document.onmouseup = null
            document.onmousemove = null
        },
        closeSimulator(e) {
            e.stopPropagation()
            this.$store.commit('toggleShownSimulator', false)
            this.$store.commit('changeActiveWindow', 'Finder')
        }
    },
    mounted: function() {
        // Query the element
        const ele = document.getElementById('container');

        // The current position of mouse
        let x = 0;
        let y = 0;

        // The dimension of the element
        let w = 0;
        let h = 0;

        const mouseDownHandlerRight = function(e) {
            x = e.clientX;

            const styles = window.getComputedStyle(ele)
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandlerRight);
            document.addEventListener('mouseup', mouseUpHandlerRight);
        }

        const mouseDownHandlerLeft = function(e) {
            x = e.clientX;

            const styles = window.getComputedStyle(ele)
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandlerLeft);
            document.addEventListener('mouseup', mouseUpHandlerLeft);
        }

        const mouseDownHandlerUp = function(e) {
            y = e.clientY;

            const styles = window.getComputedStyle(ele)
            h = parseInt(styles.height, 10);

            document.addEventListener('mousemove', mouseMoveHandlerUp);
            document.addEventListener('mouseup', mouseUpHandlerUp);
        }

        const mouseDownHandlerDown = function(e) {
            y = e.clientY;

            const styles = window.getComputedStyle(ele)
            h = parseInt(styles.height, 10);

            document.addEventListener('mousemove', mouseMoveHandlerDown);
            document.addEventListener('mouseup', mouseUpHandlerDown);
        }

        const mouseMoveHandlerUp = function(e) {
            // How far the mouse has been moved
            const dy = e.clientY - y;

            // Adjust the dimension of element
            ele.style.height = `${h - dy}px`;
        };

        const mouseMoveHandlerDown = function(e) {
            // How far the mouse has been moved
            const dy = e.clientY - y;

            // Adjust the dimension of element
            ele.style.height = `${h + dy}px`;
        };

        const mouseMoveHandlerRight = function(e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;

            // Adjust the dimension of element
            ele.style.width = `${w + dx}px`;
        };

        const mouseMoveHandlerLeft = function(e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;

            // Adjust the dimension of element
            ele.style.width = `${w - dx}px`;
        };

        const mouseUpHandlerUp = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerUp);
            document.removeEventListener('mouseup', mouseUpHandlerUp);
        };

        const mouseUpHandlerDown = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerDown);
            document.removeEventListener('mouseup', mouseUpHandlerDown);
        };

        const mouseUpHandlerRight = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerRight);
            document.removeEventListener('mouseup', mouseUpHandlerRight);
        };

        const mouseUpHandlerLeft = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerLeft);
            document.removeEventListener('mouseup', mouseUpHandlerLeft);
        };
        // Query all resizers
        const resizersRight = ele.querySelectorAll('.resizer-r');
        const resizersUp = ele.querySelectorAll('.resizer-t');
        const resizersDown = ele.querySelectorAll('.resizer-b');
        const resizersLeft = ele.querySelectorAll('.resizer-l');

        [].forEach.call(resizersRight, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerRight);
        });

        [].forEach.call(resizersUp, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerUp);
        });

        [].forEach.call(resizersDown, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerDown);
        });

        [].forEach.call(resizersLeft, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerLeft);
        });
    }
}
</script>