<template>
  <div id="app">
    <Header/>
    <hr style="padding:2px; background-color:#FFFFFF"/>
    <div class="layout">
      <CarList v-bind:cars="cars"  v-on:choose-car="chooseCar()"/>
      <Telematics_tabs class = "tab" v-bind:carPicked="carPicked"/>
    </div>  
  </div>
</template>

<script>
import Header from './layouts/Header'
import Telematics_tabs from './layouts/Telematics_tabs'
import CarList from './components/CarList';




export default {
  name: 'App',
  components: {
    CarList,
    Header,
    Telematics_tabs,
  },
   methods: {
    chooseCar(newCar) {
      this.carPicked = newCar
    }
  },
  data()  {
    return {
      cars: [],
      carPicked: ''
    }
  }
 
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .layout {
      display:grid;
      grid-template-columns: 2.5fr 1fr;
      grid-gap: 10px;
  }

  .tab {
    
    border-color: #333;
    height: 100vh;
  }
  body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
