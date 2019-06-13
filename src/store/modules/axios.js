import axiosClient from 'axios';

export const axios = {
  state:{
    response:''
  },

  getters: {
    axiosResponse: state => state.response
  },

  mutations: {
    axiosPost: (state,payload) => {
      console.log(payload)
      axiosClient.post(payload[0], payload[1])
        .then(res => console.log({
          message: 'Vuex Axios POST Response', 
          response: res,
        }))
        .catch(err => console.log({
          message: 'Vuex Axios POST Error', 
          error: err,
        })) 
    },
  },

  actions: {
    axiosPost: ({commit}, payload) => {
      commit('axiosPost', payload)
    },
  },
}