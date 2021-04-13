<template>
    <div id="mydiv" :class="{ fullscreen: $store.getters.isFullscreenStickies, close: !$store.getters.isShownStickies}">
        <div id="mydivheader" v-on:dblclick="$store.commit('toggleFullscreenStickies')">
            <div class="close-button" v-on:click="$store.commit('toggleShownStickies', false)"></div>
        </div>
        <textarea>Why are you looking at this?</textarea>
    </div>
</template>

<style scoped>
#mydiv {
    position: absolute;
    z-index: 9;
    width: 300px;
    height: 250px;
    background: #fdf4a7;
    border: solid 1px rgb(123, 123, 123, 0.5);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
    left: 50px;
    top: 50px;
    -ms-touch-action: none;
    touch-action: none;
}

#mydivheader {
    height: 15px;
    width: 100%;
    background: #fbeb61;
    display: flex;
    align-items: center;
    z-index: 10;
    -ms-touch-action: none;
    touch-action: none;
}

.fullscreen {
    width: 100% !important;
    height: 100vh !important;
    margin: 0;
    /* transition: all 0.5s ease; */
    padding: 0;
}

.close {
    display: none;
}

.close-button {
    width: 6px;
    height: 6px;
    border: 1px solid #d8c560;
    background: #fdf4a7;
    margin-left: 15px;
}

.close-button:hover {
    cursor: pointer;
}

textarea {
    width: 100%;
    height: 90%;
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
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<script>
export default {
    mounted() {
        dragElement(document.getElementById("mydiv"));
        touchDragElement(document.getElementById("mydiv"));

        function dragElement(elmnt) {
            var pos1 = 0,
                pos2 = 0,
                pos3 = 0,
                pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                elmnt.style.top = elmnt.offsetTop - pos2 + "px";
                elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

        function touchDragElement(elmnt) {
            console.log("touched")
            var pos1 = 0,
                pos2 = 0,
                pos3 = 0,
                pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
            } else {
                elmnt.ontouchstart = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // pos3 = e.clientX;
                // pos4 = e.clientY;
                // document.ontouchend = closeDragElement;
                // document.ontouchmove = elementDrag;
                // grab the location of touch
    //          box.style.left = touchLocation.pageX + 'px';
    //          box.style.top = touchLocation.pageY + 'px';
                var touchLocation = e.touches[0];
                pos3 = touchLocation.clientX
                pos4 = touchLocation.clientY
                document.ontouchend = closeDragElement;
                document.ontouchmove = elementDrag;
            }

            function elementDrag(e) {
                console.log('touch drag')
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.touches[0].clientX;
                pos2 = pos4 - e.touches[0].clientY;
                pos3 = e.touches[0].clientX;
                pos4 = e.touches[0].clientY;
                elmnt.style.top = elmnt.offsetTop - pos2 + "px";
                elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
            }

            function closeDragElement() {
                console.log('touch end')
                document.ontouchend = null;
                document.ontouchmove = null;
            }
        }
    }
}
</script>