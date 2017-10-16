<template lang="html">
  <router-link :to="{ name: 'homepage', params: {} }">
    <img
      class="airbnb-logo"
      src="../assets/images/airbnb-logo.png"
      alt=""
      >
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

.airbnb {
  &-logo {
    max-width: 100px;
  }
}

</style>
