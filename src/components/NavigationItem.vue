<template lang="html">
  <li>
    <router-link :to="navigationItem.link">{{ navigationItem.name }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    navigationItem: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

</style>
