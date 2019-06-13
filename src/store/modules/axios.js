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
        .then(res => {
          console.log(res)
          state.response = res
        })
        .catch(err => console.log(err)) 
    },
  },

  actions: {
    axiosPost: ({commit}, payload) => {
      commit('axiosPost', payload)
    },
  },
}