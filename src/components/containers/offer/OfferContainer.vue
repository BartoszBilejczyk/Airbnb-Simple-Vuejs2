<template lang='html'>
  <v-layout column>
    <div class="airbnb-offer__image" :style="{ 'background-image': 'url(' + offer.photoURL + ')' }"></div>

    <v-container>
      <v-layout row>
        <v-flex xs12 md7>
          <OfferMainInfo :offer="offer"></OfferMainInfo>
          <OfferReviews :offer="offer"></OfferReviews>
          <OfferSimilarOffers :offer="offer"></OfferSimilarOffers>
        </v-flex>
      </v-layout>

    </v-container>


  </v-layout>
</template>

<script>
import {db} from '../../../firebase'

import OfferMainInfo from '../../offer-items/OfferMainInfo.vue'
import OfferReviews from '../../offer-items/OfferReviews.vue'
import OfferSimilarOffers from '../../offer-items/OfferSimilarOffers.vue'

export default {
  name: 'OfferContainer',
  components: {
    OfferMainInfo,
    OfferReviews,
    OfferSimilarOffers,
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

<style lang="scss" scoped>

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
