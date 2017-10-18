<template lang="html">
  <v-layout row>
      <v-flex xs12>
      <v-card>
        <v-layout align-center
                  justify-space-between
                  pl-2 pr-3>
          <v-flex xs12 sm6 md9>
            <input placeholder="Where would you like to go?"
                   type="text"
                   name=""
                   value=""
                   v-model="searchQuery"
                   @keyup.enter="search()">
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-layout justify-end>
              <v-btn class="airbnb-button"
                     dark
                     @click="search()">
                Search
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SearchContainer',
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    // get where when and how many guests from vuex - then searchItem needs to pass the value somehow.
  },
  methods: {
    search() {
      let fullSearchQuery = this.searchQuery
      let searchQuery = fullSearchQuery.split(' ').join('').toLowerCase()

      let payload = {
        fullSearchQuery,
        searchQuery
      }
      this.$store.dispatch('SEARCH_ROOM', payload)
      this.$router.push('/search/' + searchQuery)
    }
  },
  watch: {
    searchQuery: function() {
      if (this.searchQuery) {
        this.errorMessage = ''
      }
    }
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

input {
  padding: 20px;
  outline: none;
  width: 100%;
}

</style>
