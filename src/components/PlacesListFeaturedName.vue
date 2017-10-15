<template lang="html">
  <span>{{ city }}</span>
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
