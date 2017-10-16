<template lang="html">
  <v-layout column mt-5 mb-5 tag="div" >
    <v-layout row nowrap justify-space-between align-center mt-2 mb-2>
      <PlacesListFeaturedName :city="fullCityName"></PlacesListFeaturedName>
      <ButtonSeeAll :city="bareCityName"></ButtonSeeAll>
    </v-layout>
    <v-layout row wrap>
      <PlacesListItem
        v-for="offer in cityOffers"
        :key="offer.id"
        :offer="offer"
        :city="bareCityName"
        ></PlacesListItem>
    </v-layout>
  </v-layout>
</template>

<script>
import {db} from '../../firebase'

import PlacesListFeaturedName from '../PlacesListFeaturedName'
import ButtonSeeAll from '../ButtonSeeAll'
import PlacesListItem from '../PlacesListItem'

export default {
  name: 'PlacesListFeaturedContainer',
  props: {
    cities: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  components: {
    PlacesListFeaturedName,
    ButtonSeeAll,
    PlacesListItem
  },
  firebase: {
    offers: db.ref('offers')
    // cityOffers: db.ref(`offers/${city}`)
  },
  computed: {
    fullCityName() {
      return this.cities[this.index].city
    },
    bareCityName() {
      // lowercase city with no spaces is needed to pass in firebase node
      return this.fullCityName.replace(/\s/g, '').toLowerCase()
    }
  },
  created() {
    // this.$bindAsArray('cityOffers', db.ref(`offers/${this.city}`))
    this.$bindAsArray('cityOffers', db.ref('offers/' + this.bareCityName).limitToLast(4))
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

</style>
