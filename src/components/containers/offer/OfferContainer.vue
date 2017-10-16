<template lang='html'>
  <v-layout column>
    <img src="https://a0.muscache.com/im/pictures/ae7de678-2533-4918-b17d-3c7d0e9c7b2b.jpg" class="airbnb-offer__image--small" alt="">
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
    this.$bindAsArray('singleOffer', db.ref('offers/' + this.$route.params.city).orderByChild('id').equalTo(this.$route.params.roomId))
  }
}
</script>

<style lang="scss">
</style>
