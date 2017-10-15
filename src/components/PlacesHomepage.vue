<template lang="html">
  <section>
    <PlacesListFeaturedContainer
      v-for="(city, index) in cities"
      :index="index"
      key="city.city"
      :cities="cities"
      :offers="offers"></PlacesListFeaturedContainer>
  </section>
</template>

<script>
import {auth, db} from '../firebase'
import firebase from 'firebase'

import PlacesListFeaturedContainer from './containers/PlacesListFeaturedContainer'

export default {
  name: 'PlacesHomepage',
  components: {
    PlacesListFeaturedContainer
  },
  firebase: {
    cities: db.ref('cities'),
    offers: db.ref('offers')
  },
  computed: {

  },
  methods: {
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithRedirect(provider).then((result) => {
        this.user = result.user
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

</style>
