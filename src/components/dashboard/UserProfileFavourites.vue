<template lang="html">
  <v-container>
    <h2 class="airbnb-heading--secondary">Saved rooms</h2>
    <v-layout row wrap>
      <PlacesListItem
        v-for="(offer, index) in userFavourites"
        :key="offer.id"
        :city="offer.city"
        :offer="offer"
        >
        {{ offer }}
      </PlacesListItem>
    </v-layout>
  </v-container>
</template>

<script>
import {db} from '../../firebase'
import PlacesListItem from '../PlacesListItem'

export default {
  name: '',
  data() {
    return {

    }
  },
  computed: {
    user() {
      return this.$store.state.currentUser
    }
  },
  components: {
    PlacesListItem
  },
  created() {
    let uid = this.user.uid
    this.$bindAsArray('userFavourites', db.ref(`favourites/${uid}`))
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

</style>
