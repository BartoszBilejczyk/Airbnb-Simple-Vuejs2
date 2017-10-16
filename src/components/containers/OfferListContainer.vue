<template lang="html">
  <v-layout row wrap tag="div">
    <PlacesListItem
      v-for="offer in cityOffers"
      :key="offer.id"
      :offer="offer"
      :city="city"
      ></PlacesListItem>
  </v-layout>
</template>

<script>
import PlacesListItem from '../PlacesListItem'
import {db} from '../../firebase'

export default {
  name: 'OfferListContainer',
  components: {
    PlacesListItem
  },
  computed: {
    city() {
      return this.$route.params.city
    }
  },
  created() {
    this.$bindAsArray('cityOffers', db.ref('offers/' + this.city))
  }
}
</script>

<style lang="scss">
</style>
