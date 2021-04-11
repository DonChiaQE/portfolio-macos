<template>
    
</template>

<style scoped>

</style>

<script>
export default {
    props: {
        showHelloProp: String
    },
    data() {
        return {
            showHello: this.showHelloProp
        }
    },
    methods: {
        toggleHello: function() {
            console.log(this.showHello)
            // this.showHello = !this.showHello;
            this.showHello = true
        }
    },
    mounted: function() {
        
    }
}
</script>