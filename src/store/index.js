import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navigationItems: [
      {name: 'Discover hosting', link: '#'},
      {name: 'Sign up', link: '#'},
      {name: 'Log in', link: '#'}
    ]
  },
  actions,
  getters,
  mutations
})
