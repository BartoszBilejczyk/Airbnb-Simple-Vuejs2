<template lang="html">
  <v-container fluid>
    <v-layout class="airbnb-navigation-wrapper" row align-center justify-space-around>
      <v-flex>
        <LogoItem></LogoItem>
      </v-flex>

      <Authentication />
    </v-layout>
  </v-container>
</template>

<script>
import LogoItem from '../LogoItem'
import Authentication from './Authentication'

export default {
  // Here Vuex data for Navigation
  name: 'NavigationContainer',
  components: {
    LogoItem,
    Authentication
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/styles/main.scss';

</style>
