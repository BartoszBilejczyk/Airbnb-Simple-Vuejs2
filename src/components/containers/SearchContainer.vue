<template lang="html">
  <v-layout row>
    <SearchItem v-for="i in 3" :key="i"></SearchItem>
  </v-layout>
</template>

<script>
import SearchItem from '../SearchItem'

export default {
  name: 'SearchContainer',
  components: {
    SearchItem
  },
  computed: {
    // get where when and how many guests from vuex - then searchItem needs to pass the value somehow.
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';


</style>
