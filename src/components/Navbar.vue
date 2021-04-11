<template>
    <div class="wrapper">
        <div class="bar-container">
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
        </div>
    </div>
</template>

<style scoped>
.bar-container {
    width: 100%;
    height: 40px;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);  
    border-radius: 10px;
    border: 1px solid  rgb(255, 255, 255, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.wrapper {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
}

.icon {
    width: 25px;
    height: 25px;
    border-radius: 12px;
    background: black;
    justify-content: center;
    align-items: center;
}
</style>