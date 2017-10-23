<template lang='html'>
  <v-layout column>
    <div class="airbnb-offer__image" :style="{ 'background-image': 'url(' + offer.photoURL + ')' }"></div>

    <v-container>
      <v-layout row>
        <v-flex xs12 md7>
          <OfferMainInfo :offer="offer"></OfferMainInfo>
          <v-flex hidden-md-and-up>
            <OfferReservation :offer="offer"></OfferReservation>
          </v-flex>
          <OfferReviews :offer="offer"></OfferReviews>
          <OfferHostInfo :offer="offer"></OfferHostInfo>
          <OfferNeighbourhood :offer="offer"></OfferNeighbourhood>
          <OfferSimilarOffers :offer="offer"></OfferSimilarOffers>
        </v-flex>
        <v-flex
          md5
          hidden-sm-and-down
          pl-5>
          <OfferReservation :offer="offer"></OfferReservation>
        </v-flex>
      </v-layout>

    </v-container>


  </v-layout>
</template>

<script>
import {db} from '../../../firebase'

import OfferMainInfo from '../../offer-items/OfferMainInfo.vue'
import OfferReviews from '../../offer-items/OfferReviews.vue'
import OfferHostInfo from '../../offer-items/OfferHostInfo.vue'
import OfferNeighbourhood from '../../offer-items/OfferNeighbourhood.vue'
import OfferSimilarOffers from '../../offer-items/OfferSimilarOffers.vue'
import OfferReservation from '../../offer-items/OfferReservation.vue'

export default {
  name: 'OfferContainer',
  components: {
    OfferMainInfo,
    OfferReviews,
    OfferHostInfo,
    OfferNeighbourhood,
    OfferSimilarOffers,
    OfferReservation
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

@import '../../../assets/styles/main.scss';

.airbnb-offer__image {
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @include md-up {
      height: 70vh;
    }
}

.rating {
  height: 10px;
  width: 80px;
  background: pal(brand, cyan);
}

</style>
