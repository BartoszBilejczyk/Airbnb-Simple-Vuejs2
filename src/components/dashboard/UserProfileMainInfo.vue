<template lang="html">
  <v-layout row wrap>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 md5 mt-4 mb-4>
        <v-card>
          <v-layout column pt-3 pb-3 pr-3 pl-3>
            <img
              class="airbnb-avatar"
              src="../../assets/images/minion.jpg"
              alt=""
              slot="activator"
              >
            <h3 class="airbnb-heading airbnb-heading--tertiary">Name Surname</h3>
            <p class="airbnb-copy">{{ user.email }}</p>

          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 offset-md1 mt-4 mb-4>
        <v-card>
          <UserProfileMainBecomeAHost></UserProfileMainBecomeAHost>
        </v-card>
      </v-flex>
    </v-layout>

    <v-flex xs12 mt-4 mb-4>
      <v-card>
        <UserProfileMainInfoFavourites :userFavourites="userFavourites"></UserProfileMainInfoFavourites>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {db} from '../../firebase'
import UserProfileMainInfoFavourites from './main/UserProfileMainInfoFavourites'
import UserProfileMainBecomeAHost from './main/UserProfileMainInfoBecomeAHost'

export default {
  name: '',
  data() {
    return {

    }
  },
  computed: {
    user() {
      return this.$store.state.currentUser
    }
  },
  components: {
    UserProfileMainInfoFavourites,
    UserProfileMainBecomeAHost
  },
  created() {
    let uid = this.user.uid
    this.$bindAsArray('userFavourites', db.ref(`favourites/${uid}`).limitToFirst(4))
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.airbnb {
  &-avatar {
    max-width: 150px;
  }
}

</style>
