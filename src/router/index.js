import Vue from 'vue'
import Router from 'vue-router'
import OfferListContainer from '../components/containers/OfferListContainer'
import MainHomepage from '../components/MainHomepage'
import OfferContainer from '../components/containers/offer/OfferContainer'
import UserProfileContainer from '../components/containers/UserProfileContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'homepage',
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
      path: '/:city/rooms/:roomId',
      components: {
        'page-router-view': OfferContainer
      }
    },
    {
      name: 'user-profile',
      path: '/user/profile',
      components: {
        'page-router-view': UserProfileContainer
      }
    },
    {
      name: 'search-results',
      path: '/search/:city',
      components: {
        'list-router-view': OfferListContainer
      }
    }
  ]
})
