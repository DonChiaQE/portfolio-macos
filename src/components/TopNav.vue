<template>
    <div class="navbar-container">
        <div class="nav-left">
            <span class="iconify nav-text" data-icon="ion-logo-apple" data-inline="false"></span>
            <div class="nav-text bold">Finder</div>
            <div class="nav-text hidden-small">File</div>
            <div class="nav-text hidden-small">Edit</div>
            <div class="nav-text hidden-small">View</div>
            <div class="nav-text hidden-small">Go</div>
            <div class="nav-text hidden-small">Window</div>
            <div class="nav-text hidden-small">Help</div>
        </div>
        <div class="nav-right">
            <div class="date text-right">
                <span>{{moment(date).format('ddd DD MMMM')}}</span>
            </div>
            <div class="time text-right">
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
    width: auto;
    margin-left: 15px;
}

.iconify {
    margin-right: 5px;
}

.nav-text {
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
}

.nav-right {
    display: flex;
    width: auto;
    justify-content: space-evenly;
    margin-right: 12px;
}

.text-right {
    font-size: 14px;
    font-weight: 500;
    margin-left: 7px;
    margin-right: 7px;
}

.bold {
    font-weight: 900;
}

@media only screen and (max-width: 600px) {
    .hidden-small {
        display: none;
    }
    .nav-left {
        width: 100px;
    }
}
</style>