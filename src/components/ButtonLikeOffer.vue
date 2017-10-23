<template lang="html">
  <v-icon v-if="this.$store.state.currentUser"
          large
          :style="likeIconPositioning"
          :class="{'airbnb-liked': isLiked}"
          @click="isLiked ? deleteOfferFromFavourites() : addOfferToFavourites()">favorite</v-icon>
</template>

<script>
import {db} from '../firebase'
export default {
  name: 'ButtonLikeOffer',
  props: {
    topPosition: {
      type: String,
      default: 0
    },
    leftPosition: {
      type: String,
      default: 0
    },
    offer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      likeIconPositioning: {
        position: 'absolute',
        top: this.topPosition,
        left: this.leftPosition
      },
      isLiked: false
    }
  },
  firebase: {
    favourites: db.ref('favourites')
    // cityOffers: db.ref(`offers/${city}`)
  },
  methods: {
    addOfferToFavourites() {
      let offer = this.offer
      let uid = this.$store.state.currentUser.uid

      this.$firebaseRefs.favourites.child(uid).push({
        city: offer.city,
        description: offer.description,
        id: offer.id,
        name: offer.name,
        numberOfGuests: offer.numberOfGuests,
        numberOfRatings: offer.numberOfRatings,
        numberOfRooms: offer.numberOfRooms,
        photoURL: offer.photoURL,
        price: offer.price,
        rating: offer.rating,
        type: offer.type
      })

      this.isLiked = true
    },
    deleteOfferFromFavourites() {
      // this.$firebaseRefs.users.push({uid: result.uid, providerData: result.providerData})
      // let user = this.$store.state.currentUser
      // user.updateProfile({
      //   favourite
      // })
      this.isLiked = false
      console.log('deleted')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

.airbnb-liked {
  color: pal(brand, pink) !important;
}

</style>
