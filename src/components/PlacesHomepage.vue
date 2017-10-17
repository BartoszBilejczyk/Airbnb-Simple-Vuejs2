<template lang="html">
  <v-container tag="section">
    <PlacesListFeaturedContainer
      v-for="(city, index) in cities"
      :index="index"
      key="city.city"
      :cities="cities"></PlacesListFeaturedContainer>
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
