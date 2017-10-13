<template lang="html">
  <div>
    <LogoItem></LogoItem>
    <ul>
      <NavigationItem v-for="i in 3"></NavigationItem>
    </ul>
  </div>
</template>

<script>
import LogoItem from '../LogoItem'
import NavigationItem from '../NavigationItem'

export default {
  // Here Vuex data for Navigation
  name: 'NavigationContainer',
  components: {
    LogoItem,
    NavigationItem
  },
  computed: {
    // navigation items from store
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

</style>
