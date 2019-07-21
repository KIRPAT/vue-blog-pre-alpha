import axios from '../../middleware/authAxios';
import { envVariables } from '../../envVariables'

export const axios = {
  state:{
    signUpResponse:'',
    isSignUpErr: null
  },

  getters: {
    signUpResponse: state => [state.signUpResponse, state.isSignUpErr]
  },

  mutations: {
    signUpPost: (state, payload) => {
      /*
        Ex:  payload:{email:"", password:"", returnSecureToken:true} 
        Ref: https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
       */
      console.log(payload)
      const route = envVariables.firebase.newUserKey
      axiosClient.post(route, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      })
        .then(res => { 
          console.log({
            message: 'Sign-up POST Response', 
            response: res,
          })
          state.response = res
          state.isErr = false
        })
        .catch(err => {
          console.log({
            message: 'Sign-up POST Error', 
            error: err,
          })
          state.isErr = true
        }) 
    },
  },

  actions: {
    signUpPost: ({commit}, payload) => {
      commit('axiosPost', payload)
    },
  },
}