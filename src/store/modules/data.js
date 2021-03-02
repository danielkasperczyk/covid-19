import axios from 'axios';

const data = {
  namespaced: true,
  state: {
    data: [],
  },
  getters: {
    getCountryData(state) {
      // TODO: get country, cases, contryInfo (lat,long) from one data
      // TODO: lat and long should be in one variable which will be array something like: markerLatLng: [47.313220, -1.319482]
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
      commit('SET_DATA', response.data);
    },
  },
};

export default data;
