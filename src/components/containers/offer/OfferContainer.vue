<template lang='html'>
  <p>This is an offer</p>
</template>

<script>
import {db} from '../../../firebase'

export default {
  name: 'OfferContainer',
  props: ['room-id'],
  computed: {

  },
  created() {
    this.$bindAsArray('singleOffer', db.ref('offers'))
    // db.ref().child('offers').once('child_added').then(function(snap) {
    //   console.log('child added')
    //
    //   let json = snap.val()
    //
    //   console.log(json)
    //
    //   for (let field in json) {
    //     console.log(field)
    //     break
    //   }
    // })
    // db.ref().child('offers').once('value').then(function(snap) {
    //   console.log('child added')
    //   console.log(snap.val())
    // })
  }
}
</script>

<style lang="scss">
</style>
