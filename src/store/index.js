import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: null,
    navigationItems: [
      {name: 'Discover hosting', link: '#'},
      {name: 'Sign up', link: '#'},
      {name: 'Log in', link: '#'}
    ]
  }
  // // handle mutations
  // actions: {
  //   LOGIN_USER: ({commit}, payload) => {
  //     commit('LOGIN_USER_MUTATION', payload)
  //     console.log('user logged in')
  //   },
  //   LOGOUT_USER: ({commit}, payload) => {
  //     commit('LOGOUT_USER_MUTATION', payload)
  //   }
  // },
  // // directly change store
  // mutations: {
  //   LOGIN_USER_MUTATION: (state, payload) => {
  //     state.loggedUser = payload
  //   },
  //   LOGOUT_USER_MUTATION: (state, payload) => {
  //     state.loggedUser = payload
  //   }
  // }
})
