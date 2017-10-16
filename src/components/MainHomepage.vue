<template lang="html">
  <div class="">
    <vHeader></vHeader>
    <PlacesHomepage></PlacesHomepage>
  </div>
</template>

<script>
import vHeader from './vHeader'
import PlacesHomepage from './PlacesHomepage'

export default {
  name: 'MainHomepage',
  components: {
    vHeader,
    PlacesHomepage
  }
}
</script>

<style lang="scss">
</style>
