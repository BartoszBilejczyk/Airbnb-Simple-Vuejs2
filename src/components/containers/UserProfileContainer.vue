<template lang="html">
  <v-container>
    <div class="">
      {{ user }}
    </div>
    <v-layout row wrap>
      <PlacesListItem
        v-for="offer in userFavourites"
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

<style lang="css">
</style>
