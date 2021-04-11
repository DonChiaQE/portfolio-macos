<template>
    <div class="navbar-container">
        <div class="nav-left">
            <span class="iconify" data-icon="ion-logo-apple" data-inline="false"></span>
            <div class="nav-text"><b>Finder</b></div>
            <div class="nav-text">File</div>
            <div class="nav-text">Edit</div>
            <div class="nav-text">View</div>
            <div class="nav-text">Go</div>
            <div class="nav-text">Window</div>
            <div class="nav-text">Help</div>
        </div>
        <div class="nav-right">
            <div class="date nav-text">
                <span>{{moment(date).format('ddd DD MMMM')}}</span>
            </div>
            <div class="time nav-text">
                <!-- 11:22PM -->
                <span>{{moment(date).format('hh:mm A')}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {


}
</script>

<style scoped>
.navbar-container {
    width: 100%;
    height: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(25px);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-left {
    display: flex;
    width: 400px;
    justify-content: space-evenly;
}

.nav-text {
    font-size: 14px;
    font-weight: 500;
}

.nav-right {
    display: flex;
    width: 160px;
    justify-content: space-evenly;
}

b {
    font-weight: 900;
}
</style>