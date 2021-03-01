import axios from 'axios';

const data = {
  namespaced: true,
  state: {
    data: [],
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const response = await axios.get(
        'https://disease.sh/v3/covid-19/countries?yesterday=true',
      );
      commit('SET_DATA', response);
    },
  },
};

export default data;
