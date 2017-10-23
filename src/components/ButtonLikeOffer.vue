<template lang="html">
  <v-icon large
          :style="likeIconPositioning"
          :class="airbnb-liked">favorite</v-icon>
</template>

<script>
export default {
  name: 'ButtonLikeOffer',
  props: {
    topPosition: {
      type: String,
      required: true
    },
    leftPosition: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      likeIconPositioning: {
        position: 'absolute',
        top: this.topPosition,
        left: this.leftPosition
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

.airbnb-liked {
  color: pal(brand, pink) !important;
}

</style>
