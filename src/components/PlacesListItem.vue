<template lang="html">
  <v-flex xs12 sm6 md3 pl-2 pr-2 pt-2 pb-2
       class="airbnb-offer--small">
    <router-link :to="{name: 'offer', params: {city: city, roomId: offer.id}}">
      <img :src="offer.photoURL" class="airbnb-offer__image--small" alt="">
    </router-link>
    <v-layout column>
      <span class="airbnb-offer-types
                   airbnb-copy--light">{{ offer.type }} | {{ offer.numberOfRooms }} Beds | {{ offer.numberOfGuests }} Guests</span>
      <span class="airbnb-offer-name">{{ offer.name }}</span>
      <span class="airbnb-offer-price">${{ offer.price }} per night</span>
      <v-layout row nowrap align-center>
        <div class="rating"></div>
        <span class="airbnb-offer-rating-number">{{ offer.numberOfRatings }} Ratings</span>
      </v-layout>
    </v-layout>
    <ButtonLikeOffer
      v-if="this.$store.state.loggedUser"
      topPosition="10px"
      leftPosition="calc(100% - 50px)"></ButtonLikeOffer>

  </v-flex>

</template>

<script>
// import {db} from '../firebase'
import ButtonLikeOffer from './ButtonLikeOffer'
export default {
  name: 'PlacesListItem',
  props: {
    offer: {
      type: Object,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  components: {
    ButtonLikeOffer
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

.airbnb-offer {
  &--small {
    flex-basis: 25%;
    position: relative;
  }

  &__image {
    &--small {
      width: 100%;
      max-height: 100%;
    }
  }

  &-types {
    @include font(8, 500);
    letter-spacing: -0.3px;
    padding: 5px 0;
    text-transform: uppercase;
  }

  &-name {
    @include font(16, 500);
    padding: 2px 0;
  }

  &-price {
    @include font(13, 400);
  }

  &-rating-number {
    @include font(10, 400);
    padding: 5px 0;
  }
}

.rating {
  height: 10px;
  width: 80px;
  background: pal(brand, cyan);
}

</style>
