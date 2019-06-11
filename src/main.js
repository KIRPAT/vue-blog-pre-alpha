import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import animated from 'animate.css'
import bootstrap from 'bootstrap'

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
