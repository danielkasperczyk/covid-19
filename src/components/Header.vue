<template>
  <v-container class="d-flex align-items-center justify-space-between">
    <h2>COVID-19 Tracker</h2>
    <v-btn outlined @click="fetchCountryData('')"> Global Data </v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapActions('data', ['fetchCountryData']),
  },
};
</script>

<style></style>
