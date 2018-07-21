<template lang="html">
  <v-container v-cloak tag="section">
    <v-layout tag="div" v-if="!cities.length" align-center justify-center>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-layout>
    <div v-else>
      <PlacesListFeaturedContainer
        v-for="(city, index) in cities"
        :index="index"
        :key="city.city"
        :cities="cities"></PlacesListFeaturedContainer>
    </div>

  </v-container tag="section">
</template>

<script>
import {db} from '../firebase'

import PlacesListFeaturedContainer from './containers/PlacesListFeaturedContainer'

export default {
  name: 'PlacesHomepage',
  components: {
    PlacesListFeaturedContainer
  },
  firebase: {
    cities: db.ref('cities')
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

</style>
