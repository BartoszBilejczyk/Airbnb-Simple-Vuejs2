<template lang="html">
  <div>
    <v-container mt-5>
      <h1 class="airbnb-heading
                 airbnb-heading--primary
                 airbnb-heading--bold
                 airbnb-heading--brand">Airbnb</h1>
      <h2 class="airbnb-heading
                 airbnb-heading--primary
                 airbnb-claim">Book unique homes and experience a city like a local.</h2>

      <SearchContainer></SearchContainer>
    </v-container>


  </div>
</template>

<script>
import SearchContainer from './containers/SearchContainer'

export default {
  name: 'Header',
  components: {
    SearchContainer
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/main.scss';

.airbnb {
  &-claim {
    width: 100%;

    @include lg-up {
      width: 60%;
    }
  }
}
</style>
