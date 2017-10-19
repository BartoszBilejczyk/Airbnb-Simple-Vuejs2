<template lang="html">
  <v-layout column mt-5 mb-5>
    <v-layout row align-center>
      <h2 class="airbnb-heading airbnb-heading--tertiary">{{ offer.numberOfRatings }} Reviews</h2>
      <div class="rating"></div>
    </v-layout>
    <hr>

    <v-layout column>
      <v-flex xs12 sm8 md6 lg4>
        <v-layout row align-center justify-space-between>
          <span class="airbnb-copy">Accuracy</span>
          <div class="rating"></div>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm8 md6 lg4>
        <v-layout row align-center justify-space-between>
          <span class="airbnb-copy">Communication</span>
          <div class="rating"></div>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm8 md6 lg4>
        <v-layout row align-center justify-space-between>
          <span class="airbnb-copy">Cleanliness</span>
          <div class="rating"></div>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm8 md6 lg4>
        <v-layout row align-center justify-space-between>
          <span class="airbnb-copy">Location</span>
          <div class="rating"></div>
        </v-layout>
      </v-flex>
    </v-layout>
    <OfferReviewsItem v-for="i in 5" :key="i">
      {{ i }}
    </OfferReviewsItem>
  </v-layout>
</template>

<script>
import OfferReviewsItem from './OfferReviewsItem'
export default {
  name: 'OfferReviews',
  props: {
    offer: {
      type: Object
    }
  },
  components: {
    OfferReviewsItem
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

</style>
