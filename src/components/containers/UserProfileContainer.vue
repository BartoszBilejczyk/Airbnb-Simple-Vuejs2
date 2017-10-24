<template lang="html">
  <v-container>
    <div class="">
      {{ user }}
    </div>
    <h2 class="airbnb-heading--secondary">Saved rooms</h2>
    <v-layout row wrap>
      <PlacesListItem
        v-for="offer in userFavourites"
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
  name: 'UserProfileContainer',
  components: {
    PlacesListItem
  },
  computed: {
    user() {
      return this.$store.state.currentUser
    }
  },
  created() {
    let uid = this.user.uid
    this.$bindAsArray('userFavourites', db.ref(`favourites/${uid}`))
  }
}
</script>

<style lang="css" scoped>
</style>
