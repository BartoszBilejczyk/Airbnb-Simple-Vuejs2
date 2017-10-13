<template>
  <div id="app">
    <Header />
    \daskjdas
    <PlacesHomepage />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import PlacesHomepage from './components/PlacesHomepage'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    PlacesHomepage,
    Footer
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
