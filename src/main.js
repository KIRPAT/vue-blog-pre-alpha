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


Vue.config.productionTip = false

//Axios
axios.defaults.baseURL = 'https://easylist-firebase-database.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'sdasda'
axios.defaults.headers.get['Accepts'] = 'application/json'

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
