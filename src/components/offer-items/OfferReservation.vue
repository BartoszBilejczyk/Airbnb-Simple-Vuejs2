<template lang="html">
  <div class="airbnb-reservation">
    <div class="airbnb-reservation-price-wrapper">
      <h2 class="airbnb-copy
                 airbnb-copy--large
                 airbnb-copy--white
                 airbnb-reservation-price">From <b class="airbnb-heading airbnb-heading--tertiary airbnb-heading--white">${{ offer.price }}</b> per night</h2>
    </div>
    <v-layout column>

      <v-layout row nowrap>
        <v-flex>
          <v-layout column>
            <span>Check in</span>
          </v-layout>
        </v-flex>
        <v-flex>
          <v-layout column>
            <span>Check out</span>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout>
        <span></span>
        <!-- <v-select
          v-bind:items="items"
          v-model="e1"
          label="Select"
          single-line
          bottom
        ></v-select> -->
      </v-layout>

      <v-btn dark large class="airbnb-button
                    airbnb-button--block">Request to Book</v-btn>
      <span class="text-xs-center">You won't be charged yet</span>

    </v-layout>

  </div>
</template>

<script>
export default {
  name: 'OfferReservation',
  props: {
    offer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      date: null,
      menu: false,
      checkInDate: null,
      checkOutDate: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.airbnb {
  &-reservation {
    position: relative;
    margin-top: -17px;
    min-height: 300px;
    padding: 20px 20px 20px;
    width: 100%;
    border: 1px solid pal(white, dark);

    &-price {
      position: absolute;

      &-wrapper {
        padding: 12px 20px;
        height: 70px;
        width: calc(100% + 2px);
        position: absolute;
        top: -70px;
        left: -1px;
        background: rgba(50,50,50,0.9)
      }
    }
  }
}
</style>
