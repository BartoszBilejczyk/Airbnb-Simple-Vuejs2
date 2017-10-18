<template lang='html'>
  <v-layout column>
    <div class="airbnb-offer__image" :style="{ 'background-image': 'url(' + offer.photoURL + ')' }"></div>

    <v-container>
      <span>{{ offer.type }} | {{ offer.numberOfRooms }} Beds | {{ offer.numberOfGuests }} Guests</span>
      <span>{{ offer.name }}</span>
      <span>${{ offer.price }} per night</span>
      <v-layout row nowrap align-center>
        <div class="rating"></div>
        <span>{{ offer.numberOfRatings }} Ratings</span>
      </v-layout>
    </v-container>

    <OfferMainInfo></OfferMainInfo>
    <OfferReviews></OfferReviews>
    <OfferHostInfo></OfferHostInfo>
    <OfferNeighbourhood></OfferNeighbourhood>
    <OfferSimilarOffers></OfferSimilarOffers>

  </v-layout>
</template>

<script>
import {db} from '../../../firebase'

import OfferMainInfo from '../../offer-items/OfferMainInfo.vue'
import OfferReviews from '../../offer-items/OfferReviews.vue'
import OfferHostInfo from '../../offer-items/OfferHostInfo.vue'
import OfferNeighbourhood from '../../offer-items/OfferNeighbourhood.vue'
import OfferSimilarOffers from '../../offer-items/OfferSimilarOffers.vue'

export default {
  name: 'OfferContainer',
  components: {
    OfferMainInfo,
    OfferReviews,
    OfferHostInfo,
    OfferNeighbourhood,
    OfferSimilarOffers
  },
  computed: {
    offer() {
      return this.singleOffer[0]
    }
  },
  created() {
    this.$bindAsArray('singleOffer', db.ref('offers/' + this.$route.params.city).orderByChild('id').equalTo(Number(this.$route.params.roomId)))
  }
}
</script>

<style lang="scss">

.airbnb-offer__image {
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

</style>
