<!--<template lang="html">-->
  <!--<div class="airbnb-reservation">-->
    <!--<div class="airbnb-reservation-price-wrapper">-->
      <!--<h2 class="airbnb-copy-->
                 <!--airbnb-copy&#45;&#45;large-->
                 <!--airbnb-copy&#45;&#45;white-->
                 <!--airbnb-reservation-price">From <b class="airbnb-heading airbnb-heading&#45;&#45;tertiary airbnb-heading&#45;&#45;white">${{ offer.price }}</b> per night</h2>-->
    <!--</div>-->
    <!--<v-layout column>-->

      <!--<v-layout row nowrap>-->
        <!--<v-flex>-->
          <!--<v-layout column>-->
            <!--<span>Check in</span>-->
          <!--</v-layout>-->
        <!--</v-flex>-->
        <!--<v-flex>-->
          <!--<v-layout column>-->
            <!--<span>Check out</span>-->
          <!--</v-layout>-->
        <!--</v-flex>-->
      <!--</v-layout>-->

      <!--<v-layout>-->
        <!--<span></span>-->
        <!--&lt;!&ndash; <v-select-->
          <!--v-bind:items="items"-->
          <!--v-model="e1"-->
          <!--label="Select"-->
          <!--single-line-->
          <!--bottom-->
        <!--&gt;</v-select> &ndash;&gt;-->
      <!--</v-layout>-->

      <!--<v-btn dark large class="airbnb-button-->
                    <!--airbnb-button&#45;&#45;block">Request to Book</v-btn>-->
      <!--<span class="text-xs-center">You won't be charged yet</span>-->

    <!--</v-layout>-->

  <!--</div>-->
<!--</template>-->


<template lang="html">

  <div class="container">
    <div class="offers">
      <div class="item" v-for="offer in offers">
        <AppOffer :offer="offer"></AppOffer>
      <div>
    </div>
  </div>

</template>

<script>
import AppOffer from '../../AppOffer'

export default {
  props: {
    counter: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      offers: [
        { name: 'Offer 1', price: 100 },
        { name: 'Offer 2', price: 200 }
      ]
    }
  },
  methods: {
    addOffer(offer) {
      this.offers.push(offer);
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/styles/main.scss';

.offer {
  position: relative;
  margin-top: 30px;
  min-height: 300px;
  padding: 20px;
  border: 1px solid pal(white, dark);
}
</style>
