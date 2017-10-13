<template lang="html">
  <v-card>sa</v-card>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    where: String,
    when: Date,
    guestsAmount: {
      type: Number,
      default: 1
      // required: true
    }
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

</style>
