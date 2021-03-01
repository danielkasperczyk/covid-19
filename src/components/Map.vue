<template>
  <l-map style="height: 60vh; width: 100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
  </l-map>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
  name: 'vue',

  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.31322, -1.319482],
    };
  },
};
</script>

<style></style>
