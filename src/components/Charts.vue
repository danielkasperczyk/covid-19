<template>
  <v-container>
    <div v-show="selectedCountry.country" class="text-center">
      <h2>{{ selectedCountry.country }}</h2>
    </div>
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" sm="4">
        <v-card class="pa-2 text-center" outlined tile>
          <h3>Cases</h3>
          <p class="ma-0">
            {{ selectedCountry.cases }}
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-2 text-center" outlined tile>
          <h3>Active</h3>
          <p class="ma-0">
            {{ selectedCountry.active }}
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" sm="4">
        <v-card class="pa-2 text-center" outlined tile>
          <h3>Death</h3>
          <p class="ma-0">
            {{ selectedCountry.deaths }}
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-2 text-center" outlined tile>
          <h3>Recovered</h3>
          <p class="ma-0">
            {{ selectedCountry.recovered }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Charts',
  computed: {
    ...mapState('data', ['selectedCountry']),
    ...mapGetters('data', ['getGlobalData']),
  },
};
</script>

<style></style>
