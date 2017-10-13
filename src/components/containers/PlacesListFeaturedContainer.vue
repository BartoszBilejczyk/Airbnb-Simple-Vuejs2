<template lang="html">
  <PlacesListFeaturedName></PlacesListFeaturedName>
  <ButtonSeeAll></ButtonSeeAll>
  <PlacesListItem v-for=""></PlacesListItem>
</template>

<script>
import PlacesListFeaturedName from '../PlacesListFeaturedName'
import ButtonSeeAll from '../ButtonSeeAll'
import PlacesListItem from '../PlacesListItem'

export default {
  name: 'PlacesListFeaturedContainer';
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
