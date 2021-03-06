import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  GoogleMapsApiKey: 'AIzaSyDxrZt-gaUMVZE0585ixxGWUx-dmiuS0og',
  state: {
    currentUser: null,
    fullSearchQuery: '',
    searchQuery: '',
    navigationItems: [
      {name: 'Discover hosting', link: '#'},
      {name: 'Sign up', link: '#'},
      {name: 'Log in', link: '#'}
    ]
  },
  // handle mutations
  actions: {
    LOGIN_USER: ({commit}, payload) => {
      commit('LOGIN_USER_MUTATION', payload)
      console.log('user logged in')
    },
    LOGOUT_USER: ({commit}, payload) => {
      commit('LOGOUT_USER_MUTATION', payload)
    },
    SEARCH_ROOM: ({commit}, payload) => {
      commit('SEARCH_ROOM_MUTATION', payload)
    }
  },
  // directly change store
  mutations: {
    LOGIN_USER_MUTATION: (state, payload) => {
      state.currentUser = payload
    },
    LOGOUT_USER_MUTATION: (state, payload) => {
      state.currentUser = payload
    },
    SEARCH_ROOM_MUTATION: (state, payload) => {
      state.fullSearchQuery = payload.fullSearchQuery
      state.searchQuery = payload.searchQuery
    }
  }
})
