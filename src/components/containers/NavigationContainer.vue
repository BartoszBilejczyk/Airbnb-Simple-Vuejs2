<template lang="html">
  <v-layout class="airbnb-navigation-wrapper" row align-center justify-space-around>
    <v-flex>
      <LogoItem></LogoItem>
    </v-flex>

    <v-layout class="airbnb-navigation" tag="ul" row justify-end>
        <NavigationItem
          class="airbnb-navigation__item"
          v-for="item in navigationItems"
          :key="item.name"
          :navigationItem="item"
          ></NavigationItem>
    </v-layout>
  </v-layout>
</template>

<script>
import LogoItem from '../LogoItem'
import NavigationItem from '../NavigationItem'

export default {
  // Here Vuex data for Navigation
  name: 'NavigationContainer',
  components: {
    LogoItem,
    NavigationItem
  },
  computed: {
    navigationItems() {
      return this.$store.state.navigationItems
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/styles/main.scss';

.airbnb {
  &-navigation {
    padding: 0;
    margin: 0;

    &-wrapper {

    }

    &__item {
      padding: 10px 20px;
      list-style: none;
      @include font(11, 300);
    }
  }
}

</style>
