<template lang="html">
  <v-layout column mt-2 mb-2>
    <v-layout mt-2 mb-4>
      <v-flex>
        <v-layout row>
          <img class="airbnb-offer__review-photo" src="../../assets/images/minion.jpg" alt="">
          <v-layout column>
            <span class="airbnb-copy">Andrzej</span>
            <span class="airbnb-copy">October 2017</span>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout row justify-end align-center>
          <span class="airbnb-copy">Report</span>
          <v-btn>Helpful</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
    <p class="airbnb-copy">
      Lorem ipsum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <hr>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';


.airbnb-offer__review {

  &-photo {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 10px;
  }
}
</style>
