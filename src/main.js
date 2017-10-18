// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import VueFire from 'vuefire'
// import Firebase from 'firebase'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueFire)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDTeX9z4yZH_Gs_1v7WtOi4LVgJN0Lt8yA'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
