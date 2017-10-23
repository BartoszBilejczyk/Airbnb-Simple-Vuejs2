<template lang="html">
  <div class="">
    <v-icon v-if="this.$store.state.currentUser"
            large
            :style="likeIconPositioning"
            :class="{'airbnb-liked': isLiked}"
            @click="isLiked ? deleteOfferFromFavourites() : addOfferToFavourites(); snackbar = true">favorite</v-icon>
    <v-snackbar
      top
      :timeout="timeout"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ isLiked ? 'You have added this room to favourites' : 'You have deleted this room from favourites'}}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>

</template>

<script>
import {db} from '../firebase'
import firebase from 'firebase'

export default {
  name: 'ButtonLikeOffer',
  props: {
    topPosition: {
      type: String,
      default: '0'
    },
    leftPosition: {
      type: String,
      default: '0'
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
      isLiked: false,
      // snackbar when liking/disliking offer
      snackbar: false,
      color: '',
      mode: '',
      timeout: 6000
    }
  },
  computed: {

  },
  methods: {
    getUsersFavourites() {
      // return item which from favourites which has offer's id
      let userFavourites = db.ref(`favourites/${this.$store.state.currentUser.uid}`).orderByChild('id').equalTo(this.offer.id)
      userFavourites.on('value', snapshot => {
        // check if it matches (which makes response != null), if true, set heart to red
        if (snapshot.val()) {
          this.isLiked = true
        }
      })
    },
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
        type: offer.type,
        liked: true
      })

      this.isLiked = true
    },
    deleteOfferFromFavourites() {
      let query = db.ref(`favourites/${this.$store.state.currentUser.uid}`).orderByChild('id').equalTo(this.offer.id)
      query.on('child_added', snapshot => {
        snapshot.ref.remove()
      })

      this.isLiked = false
    }
  },
  created() {
    this.$bindAsObject('favourites', db.ref(`favourites`))
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(() => {
      this.getUsersFavourites()
    })
  }
}
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

.airbnb-liked {
  color: pal(brand, pink) !important;
}

</style>
