<template>
  <v-app data-app="true" id="app" class="application--light" v-cloak>
    <NavigationContainer></NavigationContainer>
    <!-- <router-view name="list-router-view" :type="'page'" :mode="'collection'" :shortList="false"  :category="$route.params.category" :key="$route.params.category"></router-view>
    <router-view name="page-router-view"></router-view>
    <router-view name="search-router-view" :type="'page'" :mode="'search'" :key="$route.params.query"></router-view> -->

    <transition name="fade">
      <!-- used for homepage / offer page -->
      <router-view name="page-router-view" :city="$route.params.city" :room-id="$route.params.roomId" :key="$route.params.roomId"></router-view>
      <!-- used for offer listings -->
      <router-view name="list-router-view" :city="$route.params.city" :country="$route.params.country" :key="$route.params.city" :query="$store.state.searchQuery"></router-view>
      <!-- used for offer listings when searching -->
      <router-view name="search-router-view" :mode="'search'" :key="$route.params.query"></router-view>
    </transition>

    <VFooter />
  </v-app>
</template>

<script>
import NavigationContainer from './components/containers/NavigationContainer'
import MainHomepage from './components/MainHomepage'
import VFooter from './components/vFooter'

export default {
  name: 'App',
  components: {
    NavigationContainer,
    MainHomepage,
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

.application {
  display: block !important;
}

.application--light {
  background: pal(white) !important;
}

p, span {
  font-family: 'Open Sans', sans-serif !important;
}

a {
  color: pal(brand, copy) !important;
  font-weight: 400;
  text-decoration: none;
}

img {
  max-width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}
.fade-enter-active {
  transition-delay: 0.25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
