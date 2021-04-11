<template>
    <div class="wrapper">
        <div class="bar-container">
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
        </div>
    </div>
</template>

<style scoped>
.bar-container {
    width: auto;
    height: 70px;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(10px);  
    border-radius: 20px;
    border: 1px solid  rgb(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.wrapper {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
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

.icon:hover{
    cursor: pointer;
}
</style>