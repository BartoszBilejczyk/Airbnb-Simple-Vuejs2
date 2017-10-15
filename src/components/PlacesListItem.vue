<template lang="html">
  <p class="test">
    {{ offerName }}
  </p>
</template>

<script>
export default {
  props: {
    offers: {
      type: Array,
      required: true
    },
    offerIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    offerName() {
      return this.offers[this.offerIndex].name
    }
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

.test {
  height: 100px;
  width: 100px;
  border: 1px solid #ddd;
  display: inline-block;
  margin: 10px;
}

</style>
