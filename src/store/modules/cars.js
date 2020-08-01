import axios from 'axios';

const state = {
    cars: []
};

const getters = {
    allCars: (state) => state.cars
};

const actions = {
    async fetchCars({commit}) {
        const response = await axios.get('http://localhost:1337');

        commit('setCars',response.data);
    }
    
};

const mutations = {
    setCars: (state, cars) => (state.cars = cars)
};

export default {
    state,
    getters,
    actions,
    mutations
}
