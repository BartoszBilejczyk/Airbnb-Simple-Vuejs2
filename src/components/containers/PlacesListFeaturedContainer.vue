<template lang="html">
  <div class="">
    <PlacesListFeaturedName :city="cities[index].city"></PlacesListFeaturedName>
    <ButtonSeeAll></ButtonSeeAll>
    <v-layout>
      <v-flex>
        <PlacesListItem
          v-for="(i, offerIndex) in 4"
          :offers="offers"
          :offerIndex="offerIndex"></PlacesListItem>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
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
    },
    offers: {
      type: Array,
      required: true
    }
  },
  components: {
    PlacesListFeaturedName,
    ButtonSeeAll,
    PlacesListItem
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

</style>
