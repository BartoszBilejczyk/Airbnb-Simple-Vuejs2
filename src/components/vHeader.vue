<template lang="html">
  <div>
    <v-container>
      <NavigationContainer></NavigationContainer>
      <h1 class="airbnb-heading
                 airbnb-heading--primary
                 airbnb-heading--bold
                 airbnb-heading--brand">Airbnb</h1>
      <h2 class="airbnb-heading
                 airbnb-heading--primary">Book unique homes and experience a city like a local</h2>

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
