import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // Store instance needd this.

import {quotes} from './modules/quotes'
import {contentNavItems} from './modules/contentNavItems'
import {superQuiz} from './modules/superQuiz'
import {axios} from './modules/axios'

export default new Vuex.Store({
  modules: {
    quotes,
    contentNavItems,
    superQuiz,
    axios,
  } 
})
