<template>
  <div id="app" v-cloak>
    <VHeader />
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
  font-family: 'Raleway', sans-serif !important;
  box-sizing: border-box;
  overflow-x: hidden !important;
}

p, span {
  font-family: 'Roboto', sans-serif !important;
}

a {
  color: pal(brand, copy) !important;
  font-weight: 400;
  text-decoration: none;
}

img {
  max-width: 100%;
}

</style>
