<template lang="html">
  <v-tabs light fixed icons centered>
    <v-tabs-bar >
      <v-tabs-slider color="black"></v-tabs-slider>
      <v-tabs-item v-for="tab in tabs" :key="tab.id" :href="tab.id">
        <v-icon dark>{{ tab.icon }}</v-icon>
        {{ tab.text }}
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-container>
        <v-tabs-content id="tab-1">
          <UserProfileMainInfo></UserProfileMainInfo>
        </v-tabs-content>
        <v-tabs-content id="tab-2">
          <UserProfileFavourites></UserProfileFavourites>
        </v-tabs-content>
        <v-tabs-content id="tab-3">
          <UserProfileBecomeAHost></UserProfileBecomeAHost>
        </v-tabs-content>
      </v-container>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import UserProfileMainInfo from '../dashboard/UserProfileMainInfo'
import UserProfileFavourites from '../dashboard/UserProfileFavourites'
import UserProfileBecomeAHost from '../dashboard/UserProfileBecomeAHost'

export default {
  name: 'UserProfileContainer',
  data() {
    return {
      tabs: [
        {icon: 'account_box', text: 'Profile', id: '#tab-1'},
        {icon: 'favorite', text: 'Favourites', id: '#tab-2'},
        {icon: 'account_box', text: 'Become a Host', id: '#tab-3'}
      ],
      mama: 'sd'
    }
  },
  components: {
    UserProfileMainInfo,
    UserProfileFavourites,
    UserProfileBecomeAHost
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.tabs__bar {
  background-color: pal(brand, pink);
  color: white !important;
}

</style>
