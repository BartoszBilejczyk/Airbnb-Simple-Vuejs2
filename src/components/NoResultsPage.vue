<template lang="html">
  <v-layout column align-center justify-center tag="div" class="fullpage">
    <v-layout column mb-5 class="text-xs-center">
      <h1 class="airbnb-heading--secondary">No results found for '{{ this.$store.state.fullSearchQuery }}'</h1>

      <p class="airbnb-copy">We couldn't find any rooms in the city you searched for.</p>

      <v-layout justify-center>
        <router-link :to="{ name: 'homepage', params: {} }">
          <v-btn>
            Go to Homepage
          </v-btn>
        </router-link>
        <v-btn class="airbnb-button" dark @click="searchAgain = true">
          Search again
        </v-btn>
      </v-layout>

      <v-layout mt-4 v-if="searchAgain">
        <SearchContainer></SearchContainer>
      </v-layout>
    </v-layout>

    <img src="../assets/images/seat.jpg" alt="">
  </v-layout>
</template>

<script>
import SearchContainer from './containers/SearchContainer'

export default {
  name: 'NoResultsPage',
  components: {
    SearchContainer
  },
  data() {
    return {
      searchAgain: false
    }
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

</style>
