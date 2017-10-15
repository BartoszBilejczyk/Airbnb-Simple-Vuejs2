<template>
  <div id="app">
    <VHeader />
    \daskjdas
    <PlacesHomepage />
    <VFooter />
  </div>
</template>

<script>
import VHeader from './components/vHeader'
import PlacesHomepage from './components/PlacesHomepage'
import VFooter from './components/vFooter'

export default {
  name: 'App',
  components: {
    VHeader,
    PlacesHomepage,
    VFooter
  }
}
</script>

<style lang="scss">

@import './assets/styles/main.scss';

html, body {
  font-family: 'Montserrat', sans-serif !important;
  box-sizing: border-box;
}

p, span {
  font-family: 'Roboto', sans-serif !important;
}

</style>
