<template lang="html">
  <router-link class="view-all" :to="{name: 'offer-list', params: {city: city}}">
      <span>See all</span>
  </router-link>
</template>

<script>
export default {
  name: 'SeeAll',
  props: {
    city: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

</style>
