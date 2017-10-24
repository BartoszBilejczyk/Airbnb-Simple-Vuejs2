<template lang="html">
  <v-layout>
    <v-container class="">
      <h1 v-if="cityOffers.length" class="airbnb-heading--secondary">See rooms in <b>{{ fullCityName }}</b></h1>
      <v-layout v-if="cityOffers.length" row wrap tag="div" mt-5>
        <PlacesListItem
          v-for="offer in cityOffers"
          :key="offer.id"
          :offer="offer"
          :city="city"
          ></PlacesListItem>
      </v-layout>

      <NoResultsPage v-if="!cityOffers.length"></NoResultsPage>
    </v-container>
  </v-layout>
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
    },
    fullCityName() {
      if (this.cityOffers.length) {
        return this.cityOffers[0].city
      } else {
        return 'null'
      }
    }
  },
  created() {
    this.$bindAsArray('cityOffers', db.ref('offers/' + this.city))
  }
}
</script>

<style lang="scss" scoped>
</style>
