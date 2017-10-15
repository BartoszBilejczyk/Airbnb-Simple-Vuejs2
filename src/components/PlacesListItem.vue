<template lang="html">
  <v-flex xs12 sm6 md4 lg2 pl-2 pr-2
       class="airbnb-offer--small">
    <img src="https://a0.muscache.com/im/pictures/ae7de678-2533-4918-b17d-3c7d0e9c7b2b.jpg" class="airbnb-offer__image--small" alt="">
    <p class="test">
      {{ offer.city }}
    </p>
  </v-flex>

</template>

<script>
// import {db} from '../firebase'
export default {
  props: {
    offers: {
      type: Array,
      required: true
    },
    offerIndex: {
      type: Number,
      required: true
    },
    offer: {
      type: Object,
      required: true
    }
  }
  // firebase: {
  //   offers: db.ref('offers/').child('offer1')
  // }
  // methods: {
  //   createUsedProps() {
  //     let properties = {
  //       photoURL: this.offers[this.offerIndex].photoURL,
  //       numberOfRooms: this.offers[this.offerIndex].numberOfRooms,
  //       numberOfGuests: this.offers[this.offerIndex].numberOfGuests,
  //       rating: this.offers[this.offerIndex].rating,
  //       name: this.offers[this.offerIndex].name,
  //       numberOfRatings: this.offers[this.offerIndex].numberOfRatings,
  //       price: this.offers[this.offerIndex].price,
  //       city: this.offers[this.offerIndex].city
  //     }
  //     return properties
  //   }
  // },
  // created() {
  //   this.createUsedProps()
  // }
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

</style>
