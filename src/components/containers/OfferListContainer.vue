<template lang="html">
  <div class="">
    <v-layout v-if="cityOffers.length > 0" row wrap tag="div">
      <PlacesListItem
        v-for="offer in cityOffers"
        :key="offer.id"
        :offer="offer"
        :city="city"
        ></PlacesListItem>
    </v-layout>

    <NoResultsPage v-if="cityOffers.length === 0"></NoResultsPage>
  </div>
</template>

<script>
import PlacesListItem from '../PlacesListItem'
import NoResultsPage from '../NoResultsPage'
import {db} from '../../firebase'

export default {
  name: 'OfferListContainer',
  components: {
    PlacesListItem,
    NoResultsPage
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
