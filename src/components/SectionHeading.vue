<template lang="html">
  <h3 class="airbnb-heading--secondary
             airbnb-heading--bold">{{ name }}</h3>
</template>

<script>
export default {
  name: 'SectionHeading',
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';



</style>
