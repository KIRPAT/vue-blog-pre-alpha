import axiosClient from 'axios';

export const axios = {
  state:{
    response:'',
    isErr: null
  },

  getters: {
    axiosResponse: state => [state.response, state.isErr]
  },

  mutations: {
    axiosPost: (state,payload) => {
      console.log(payload)
      axiosClient.post(payload[0], payload[1])
        .then(res => { 
          console.log({
            message: 'Vuex Axios POST Response', 
            response: res,
          })
          state.response = res
          state.isErr = false
        })
        .catch(err => {
          console.log({
            message: 'Vuex Axios POST Error', 
            error: err,
          })
          state.isErr = true
        }) 
    },
  },

  actions: {
    axiosPost: ({commit}, payload) => {
      commit('axiosPost', payload)
    },
  },
}