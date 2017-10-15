<template lang="html">
  <div v-cloak>
    <PlacesListFeaturedName :city="cities[index].city"></PlacesListFeaturedName>
    <ButtonSeeAll></ButtonSeeAll>
    <v-layout row wrap>
      <!-- <v-flex -->
        <PlacesListItem
          v-for="(offer, offerIndex) in offers"
          :offers="offers"
          :offer="offer"
          :offerIndex="offerIndex"></PlacesListItem>
      <!-- </v-flex> -->
    </v-layout>
  </div>
</template>

<script>
import {db} from '../../firebase'

import PlacesListFeaturedName from '../PlacesListFeaturedName'
import ButtonSeeAll from '../ButtonSeeAll'
import PlacesListItem from '../PlacesListItem'

const offersRef = db.ref('offers')

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
    offers: offersRef
  },
  computed: {
    warsawOffers() {
      return this.offers.ref('offer1')
    }
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

</style>
