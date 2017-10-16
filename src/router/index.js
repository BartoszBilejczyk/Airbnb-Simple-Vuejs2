import Vue from 'vue'
import Router from 'vue-router'
import OfferListContainer from '../components/containers/OfferListContainer'
import MainHomepage from '../components/MainHomepage'
import OfferContainer from '../components/containers/offer/OfferContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'places-homepage',
      path: '/',
      components: {
        'page-router-view': MainHomepage
      }
    },
    {
      name: 'offer-list',
      path: '/s/:city',
      components: {
        'list-router-view': OfferListContainer
      }
    },
    {
      name: 'offer',
      path: '/rooms/:room-id',
      components: {
        'page-router-view': OfferContainer
      }
    }
  ]
})
