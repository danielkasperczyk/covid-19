<template>
  <l-map style="height: 60vh; width: 100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker
      v-for="(data, index) in getCountriesData"
      :lat-lng="data.latLng"
      :key="index"
      @click="fetchCountryData(data.country)"
    >
    </l-marker>
  </l-map>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'vue',

  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.31322, -1.319482],
    };
  },
  methods: {
    ...mapActions('data', ['fetchCountryData']),
  },
  computed: {
    ...mapGetters('data', ['getCountriesData']),
  },
};
</script>

<style></style>
