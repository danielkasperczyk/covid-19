<template>
  <v-app>
    <v-app-bar app>
      <Header />
    </v-app-bar>
    <v-main>
      <v-layout class="d-flex flex-column">
        <Map />
        <Charts />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Map from '@/components/Map.vue';
import Charts from '@/components/Charts.vue';

export default {
  name: 'App',

  components: {
    Header,
    Map,
    Charts,
  },

  data: () => ({
    //
  }),
};
</script>
