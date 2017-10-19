<template lang="html">
  <v-layout column mt-4 mb-5>
    <h1 class="airbnb-heading airbnb-heading--tertiary">{{ offer.name }}</h1>
    <v-layout row align-center class="airbnb-copy airbnb-copy--small airbnb-copy--light">
      <span>{{ offer.type }} | </span>
      <div class="rating"></div>
      <span>{{ offer.numberOfRatings }} Ratings</span>
    </v-layout>
    <v-layout row align-center class="airbnb-offer__details">
      <v-icon>home</v-icon>
      <span>{{ offer.numberOfGuests }} guests</span>
      <v-icon>home</v-icon>
      <span>{{ offer.numberOfRooms}} rooms</span>
    </v-layout>
    <p class="airbnb-copy" v-for="i in 4">
      {{ offer.description }}
    </p>
  </v-layout>

</template>

<script>
export default {
  name: 'OfferMainInfo',
  props: {
    offer: {
      type: Object
    }
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

.airbnb-offer {

  &__details {
    margin: 20px 0;
  }
}
</style>
