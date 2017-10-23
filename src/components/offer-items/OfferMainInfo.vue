<template lang="html">
  <v-layout column mt-4 mb-5 class="airbnb-offer-main-info">
    <v-flex hidden-sm-and-down>
      <ButtonLikeOffer :offer="offer" leftPosition="-8%"></ButtonLikeOffer>
    </v-flex>
    <v-flex hidden-sm-and-up>
      <ButtonLikeOffer :offer="offer" topPosition="-100px"></ButtonLikeOffer>
    </v-flex>

    <h1 class="airbnb-heading airbnb-heading--secondary">{{ offer.name }}</h1>
    <h2 class="airbnb-heading airbnb-heading--tertiary">${{ offer.price }} per night</h2>
    <v-layout row align-center class="airbnb-copy airbnb-copy--small airbnb-copy--light">
      <span>{{ offer.type }} | </span>
      <img src="../../assets/images/rating.png" alt="Offer rating">
      <span>{{ offer.numberOfRatings }} Ratings</span>
    </v-layout>
    <v-layout row wrap align-end justify-start class="airbnb-offer__details">
      <v-flex xs3 sm2>
        <v-icon>face</v-icon>
        <span>{{ offer.numberOfGuests }} guests</span>
      </v-flex>
      <v-flex xs3 sm2>
        <v-icon>home</v-icon>
        <span>{{ offer.numberOfRooms}} rooms</span>
      </v-flex>
      <v-flex xs3 sm2>
        <v-icon>weekend</v-icon>
        <span>{{ offer.numberOfRooms}} beds</span>
      </v-flex>
    </v-layout>
    <p class="airbnb-copy" v-for="i in 4">
      {{ offer.description }}
    </p>
  </v-layout>

</template>

<script>
import ButtonLikeOffer from '../ButtonLikeOffer'
export default {
  name: 'OfferMainInfo',
  props: {
    offer: {
      type: Object
    }
  },
  components: {
    ButtonLikeOffer
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

.airbnb-offer {

  &__details {
    margin: 20px 0;
  }

  &-main-info {
    position: relative;
  }
}
</style>
