<template lang="html">
  <v-layout column mt-5 mb-5 tag="div">
    <v-layout row nowrap justify-space-between align-center mt-2 mb-2>
      <SectionHeading :name="fullCityName"></SectionHeading>
      <ButtonSeeAll :city="bareCityName"></ButtonSeeAll>
    </v-layout>
    <v-layout row wrap>
      <v-layout v-if="!cityOffers.length" align-center justify-center>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-layout>
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

import SectionHeading from '../SectionHeading'
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
    SectionHeading,
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
    this.$bindAsArray('cityOffers', db.ref('offers/' + this.bareCityName).limitToFirst(4))
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/styles/main.scss';

</style>
