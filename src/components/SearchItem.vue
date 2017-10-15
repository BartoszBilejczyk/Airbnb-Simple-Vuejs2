<template lang="html">
  <v-flex xs12 sm4 class="airbnb-search__item">
    <v-card>sa</v-card>
  </v-flex>
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

.airbnb-search {
  &__item {
    &:not(:first-of-type):not(:last-of-type) {
      margin: 0 20px;
    }
  }
}

</style>
