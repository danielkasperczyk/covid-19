<template>
  <l-map style="height: 60vh; width: 100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker
      v-for="(data, index) in getCountryData"
      :lat-lng="data.latLng"
      :key="index"
    >
      <l-popup class="text-center">
        {{ data.country }}
        <br />
        Cases: {{ data.cases }}
      </l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { mapGetters } from 'vuex';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

export default {
  name: 'vue',

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.31322, -1.319482],
    };
  },
  computed: {
    ...mapGetters('data', ['getCountryData']),
  },
};
</script>

<style></style>
