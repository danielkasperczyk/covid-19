import axios from 'axios';

const data = {
  namespaced: true,
  state: {
    data: [],
    globalData: [],
    selectedCountry: [],
  },
  getters: {
    getCountriesData(state) {
      const filteredArray = state.data.map(
        ({ country, cases, countryInfo }) => {
          const countryData = {
            country,
            cases,
            latLng: [countryInfo.lat, countryInfo.long],
          };
          return countryData;
        },
      );
      return filteredArray;
    },
    getGlobalData(state) {
      return state.globalData;
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
    SET_GLOBALDATA(state, payload) {
      state.globalData = payload;
    },
    SET_COUNTRY(state, payload) {
      state.selectedCountry = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const response = await axios.get(
        'https://disease.sh/v3/covid-19/countries?yesterday=true',
      );
      commit('SET_DATA', response.data);
    },
    async fetchGlobalData({ commit }) {
      const response = await axios.get('https://disease.sh/v3/covid-19/all');
      commit('SET_GLOBALDATA', response.data);
    },
    async fetchCountryData({ commit, getters }, text) {
      if (!text) {
        commit('SET_COUNTRY', getters.getGlobalData);
      } else {
        const response = await axios.get(
          `https://disease.sh/v3/covid-19/countries/${text}`,
        );
        commit('SET_COUNTRY', response.data);
      }
    },
  },
};

export default data;
