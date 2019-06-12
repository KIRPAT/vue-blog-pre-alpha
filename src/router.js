import Vue from 'vue'
import Router from 'vue-router'

// Lazy LoadedViews (Though not so lazy in my case.)
const Home = () => import('./views/Home')
const Quotes = () => import ('./views/Quotes')
const FuzzySearch = () => import('./views/FuzzySearch')
const Routing = () => import('./views/Routing')
  const PushHome = () => import('./components/view/routing/PushHome' )
  const DynamicRouting = () => import('./components/view/routing/DynamicRouting')
  const NamedRouteView = () => import('./components/view/routing/namedRouteView/NamedRouteView')
    const Default = () => import('./components/view/routing/namedRouteView/Default')
    const Named = () => import('./components/view/routing/namedRouteView/Named')
  const ScrollBehaviour = () => import('./components/view/routing/ScrollBehaviour')
  const RouteGuards = () => import('./components/view/routing/RouteGuards')
const Animations = () => import('./views/Animations')
const SuperQuiz = () => import('./views/SuperQuiz')
const Axios = () => import('./views/Axios')
const FourOhFour = () => import('./components/global/redirects/FourOhFour')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return {selector: to.hash}
    else if (savedPosition) return savedPosition
    else return {x:0, y:0} 
  },

  // Do not change the array order of "routes"! 
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },

    {
      name: 'Quotes',
      path: '/quotes',
      component: Quotes
    },
    
    {
      name: 'Routing',
      path: '/routing',
      redirect:'/routing/push-home',
      component: Routing,
      children: [
        { 
          name: 'Push Home', 
          path: 'push-home',
          component: PushHome
        },
        
        {
          name: 'Dynamic Routing', 
          path: 'dynamic-routing', 
          component: DynamicRouting,
          children:[
            { 
              path: ':id', 
              component: DynamicRouting,
            }
          ]
        },
        
        {
          name: 'Named Route View', 
          path: 'named-route-view', 
          component: NamedRouteView,
          children:[
            {
              path:'/', 
              components: {
                default: Default,
                'named-view': Named,
              }
            }
          ] 
        },

        {
          name: 'Scroll Behaviour', 
          path: 'scroll-behaviour',
          component: ScrollBehaviour,
        },

        {
          name: 'Route Guards',
          path: 'route-guards',
          component: RouteGuards,
          children: [
            //beforeRouteUpdate hook in the component needs a child route
            {
              path: ':id',
              component: RouteGuards,
            }
          ],
          beforeEnter: (to, from, next) => {
            console.log('Inside the route, "beforeEnter"')
            next()
          },
        },
      ]
    },

    {
      name: 'Fuzzy Search',
      path: '/fuzzy-search',
      component: FuzzySearch,
    },

    {
      name: 'Animations',
      path: '/animations',
      component: Animations
    },

    {
      name: 'Super Quiz',
      path: '/super-quiz',
      component: SuperQuiz,
    },

    {
      name: 'Axios',
      path: '/axios',
      component: Axios,
    },

    {
      name: '404',
      path: '*',
      component: FourOhFour
    }
  ]
})


