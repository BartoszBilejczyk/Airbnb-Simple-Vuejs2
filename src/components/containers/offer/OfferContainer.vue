<template lang='html'>
  <v-layout column>
    <img :src="offer.photoURL" class="airbnb-offer__image" alt="">
    <span>{{ offer.type }} | {{ offer.numberOfRooms }} Beds | {{ offer.numberOfGuests }} Guests</span>
    <span>{{ offer.name }}</span>
    <span>${{ offer.price }} per night</span>
    <v-layout row nowrap align-center>
      <div class="rating"></div>
      <span>{{ offer.numberOfRatings }} Ratings</span>
    </v-layout>
  </v-layout>
</template>

<script>
import {db} from '../../../firebase'

export default {
  name: 'OfferContainer',
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
    height: auto;
}

</style>
