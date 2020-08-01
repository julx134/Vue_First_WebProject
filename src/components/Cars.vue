<template>
    <div id = "m_over" @click = "$emit('choose-car', car)" @mouseover="mouseOver" @mouseleave="mouseOut" class ="no-hover" v-bind:class="{'hover':car.hover == 1}">
       <span class="span">
            <div class = "icon">
                <img src = "https://clipartart.com/images/3d-car-clipart-1.png" width = "100" height = "50"/> </div>
            <div>id="{{car.id}}"</div>
            <div>{{car.name}}</div>
            <div>{{car.GPS}}</div>
        </span> 
    </div>
</template>


<script>  
    export default {    
        name: "Cars",
        props: ["car"],
        methods: {
            mouseOver() {
                this.car.hover = 1;
            },
            mouseOut() {
                this.car.hover = 0;
            },
            loadService() {
                this.car.forEach(element => {
                    this.car.service = element.service;
                });
            }
        }
    }

    
</script>


<style scoped>

    .no-hover {
        
        background: #ffffff;
        padding: 10px;
        border-bottom: 1px #ccc inset;

    }

    .hover {
        background: #f4f4f4;
        padding: 20px;
        cursor: pointer;
    }

    .span {
        display: grid;
        grid-template-columns: 5fr 5fr 5fr 1fr;
        padding: 10px;
    }

    
</style>