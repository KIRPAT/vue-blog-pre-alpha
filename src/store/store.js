import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {quotes} from './modules/quotes'
import {contentNavItems} from './modules/contentNavItems'
import {superQuiz} from './modules/superQuiz'

export default new Vuex.Store({
  modules: {
    quotes,
    contentNavItems,
    superQuiz
  } 
})
