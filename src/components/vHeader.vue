<template lang="html">
  <div>
    <v-container>
      <NavigationContainer></NavigationContainer>
      Airbnb
      Book unique homes and experience a city like a local

      <SearchContainer></SearchContainer>
    </v-container>


  </div>
</template>

<script>
import NavigationContainer from './containers/NavigationContainer'
import SearchContainer from './containers/SearchContainer'

export default {
  name: 'Header',
  components: {
    NavigationContainer,
    SearchContainer
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

</style>
