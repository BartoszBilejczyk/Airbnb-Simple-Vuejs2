<template lang="html">
  <h3 class="airbnb-heading--secondary">{{ city }}</h3>
</template>

<script>
export default {
  name: 'PlacesListFeaturedName',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';



</style>
