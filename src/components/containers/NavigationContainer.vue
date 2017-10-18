<template lang="html">
  <v-container fluid>
    <v-layout class="airbnb-navigation-wrapper" row align-center justify-space-around>
      <v-layout align-center>
        <LogoItem></LogoItem>

        <v-flex xs12 sm8 md6 lg4 ml-4 v-if="$route.path !== '/'">
          <SearchContainer></SearchContainer>
        </v-flex>
        <!-- show search when not on homepage -->
      </v-layout>

      <Authentication />
    </v-layout>
  </v-container>
</template>

<script>
import LogoItem from '../LogoItem'
import Authentication from './Authentication'
import SearchContainer from './SearchContainer'

export default {
  // Here Vuex data for Navigation
  name: 'NavigationContainer',
  components: {
    LogoItem,
    Authentication,
    SearchContainer
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/styles/main.scss';

</style>
