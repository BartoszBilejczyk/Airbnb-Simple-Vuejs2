<template lang="html">
  <v-layout column align-center justify-center tag="div" class="fullpage airbnb-no-results-wrapper">
    <v-layout column mb-5 class="text-xs-center airbnb-no-results">
      <h1 class="airbnb-heading--secondary">No results found for <b>{{ this.$store.state.fullSearchQuery }}</b></h1>

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

    <img src="../assets/images/seat.jpg" class="airbnb-no-results-image">
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

.airbnb {
  &-no-results {
    max-height: 250px;

    &-wrapper {
      @include md-up {
        padding: 50px 0;
      }
    }
    &-image {
      @include md-up {
        max-width: 30vw;
      }
    }
  }
}
</style>
