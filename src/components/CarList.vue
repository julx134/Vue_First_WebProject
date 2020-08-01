<template>
    <div>
        <div v-bind:key="car.id" v-for="car in allCars" class = "thisCar">
            <Cars v-bind:car="car" v-on:choose-car="$emit('choose-car', newCar)"/>
        </div>
    </div>
</template>


<script> 
import Cars from './Cars';
import {mapGetters, mapActions} from 'vuex';


    export default {
        name: "CarList",
        components: {
            Cars
        },
        props: ["cars"],
        methods: {
            ...mapActions(['fetchCars'])
        },
        computed: mapGetters(['allCars']),
        created() {
            this.fetchCars();
        }
        
    }
    
</script>


<style scoped>


</style>