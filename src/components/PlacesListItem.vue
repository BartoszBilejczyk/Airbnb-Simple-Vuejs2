<template lang="html">
  <v-flex xs12 sm6 md3 pl-2 pr-2
       class="airbnb-offer--small">
    <img src="https://a0.muscache.com/im/pictures/ae7de678-2533-4918-b17d-3c7d0e9c7b2b.jpg" class="airbnb-offer__image--small" alt="">
    <v-layout column>
      <span>{{ offer.type }} | {{ offer.numberOfRooms }} Beds | {{ offer.numberOfGuests }} Guests</span>
      <span>{{ offer.name }}</span>
      <span>${{ offer.price }} per night</span>
      <v-layout row nowrap align-center>
        <div class="rating"></div>
        <span>{{ offer.numberOfRatings }} Ratings</span>
      </v-layout>
    </v-layout>
  </v-flex>

</template>

<script>
// import {db} from '../firebase'
export default {
  props: {
    offer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

.airbnb-offer {

  &--small {
    flex-basis: 25%;
  }
  //
  // &__image {
  //
  //   &--small {
  //     height: 100px;
  //     width: 100px;
  //   }
  // }
}

.rating {
  height: 10px;
  width: 80px;
  background: pal(brand, cyan);
}

</style>
