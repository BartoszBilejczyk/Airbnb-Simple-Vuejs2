<template lang="html">
  <v-layout column align-center pt-3 pb-3 pr-3 pl-3>
    <v-layout row wrap>
      <PlacesListItem
        v-for="(offer, index) in userFavourites"
        :key="offer.id"
        :city="offer.city"
        :offer="offer"
        >
        {{ offer }}
      </PlacesListItem>
    </v-layout>
    <v-btn class="airbnb-button" dark>See all</v-btn>
  </v-layout>
</template>

<script>
import PlacesListItem from '../../PlacesListItem'

export default {
  name: '',
  props: {
    userFavourites: {
      type: Array,
      required: false
    }
  },
  components: {
    PlacesListItem
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/main.scss';

</style>
