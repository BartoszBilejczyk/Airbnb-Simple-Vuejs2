<template lang="html">
  <div class="">
    <OfferReviewsItem v-for="i in 4" :key="i">
      {{ i }}
    </OfferReviewsItem>
  </div>
</template>

<script>
import OfferReviewsItem from './OfferReviewsItem'
export default {
  components: {
    OfferReviewsItem
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

</style>
