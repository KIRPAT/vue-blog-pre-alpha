//Vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

//Style
import animated from 'animate.css'
import bootstrap from 'bootstrap'

//Middleware
import axios from "axios"

//Axios (Global)
axios.defaults.baseURL = 'https://easylist-firebase-database.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'sdasda'
axios.defaults.headers.get['Accepts'] = 'application/json'
const requestInterceptor = axios.interceptors.request.use(req => {
  console.log({
    message: 'Axios Request Interceptor',
    request: req
  })
  return req
})
const responseInterceptor = axios.interceptors.response.use(res => {
  console.log({
    message: 'Axios Response Interceptor',
    response: res
  })
  return res
})
//axios.interceptors.request.eject(requestInterceptor)
//axios.interceptors.response.eject(responseInterceptor)

//Vue
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  //console.log('global beforeEach')
  next()
})

new Vue({
  router,
  store,
  animated,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
