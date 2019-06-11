export const quotes = {
  state:{
    quotes: [
      "This is a quote!", 
      "This is also a quote!", 
      "Another one!"
    ],
    maxQuotes: 10,
  },

  getters: {
    quotes: state => {
      return state.quotes
    },
    maxQuotes: state => {
      return state.maxQuotes
    },
    quotesLength: state => {
      return state.quotes.length;
    }
  },

  mutations: {
    addQuote: (state, payload) => {
      if (state.quotes.length < state.maxQuotes) {
        state.quotes.unshift(payload)
      }
    },
    deleteQuote: (state, payload) => {
      state.quotes.splice(payload, 1)
    }
  },

  actions: {
    addQuote: ({commit}, payload) => {
      commit('addQuote', payload)
    },
    deleteQuote: ({commit}, payload) => {
      commit('deleteQuote', payload)
    }
  },
}