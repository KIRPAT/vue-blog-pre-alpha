<template lang="pug">
  div.layout
    div.container
      h1 (WIP) Authentication
      p
        |Vue is designed as an SPA framework, 
        |and the authentication proccess works a little different here. We need an Auth Token. CS
      p 
        |I've used Firebase again for dummy authentication.
        |This time though, I have activated the E-mail sign up option, 
        |and changed the read/write permissions.
      code Permission: 
        <pre> {{permission}} </pre>
      p 
        |I think we are ready to use 
        a(href="https://firebase.google.com/docs/reference/rest/auth#section-create-email-password" target="_blank") Firebase SDK  
        |and sign a new user.
      
      div.form
        div.field-pair
          h5 Email:
          input(v-model="form.email")
        div.field-pair
          h5 Password:
          input(v-model="form.password")
        button(@click="singUp" class="btn-signup") Sign Up

</template>

<script>
import axios from '@/middleware/authAxios'
import { mapActions } from 'vuex'
export default {
  data: () => ({
    permission: `{"rules": {".read": "auth != null", ".write": true}}`,
    form: {
      email: '',
      password: '',
    }
  }),
  methods: {
    ...mapActions([
      ""
    ])
  }
}
</script>

<style scoped>
  .btn:focus{
    outline: none !important;
    box-shadow: none !important;
  }

  .layout{
    display: grid;
    grid-template-columns:[a] auto;
    overflow-y: auto;
  }
  

  .container{
    grid-area: a;
    display: grid;
    grid-template-columns: minmax(0, auto);
    margin-top: 2rem;
  }

  .container > p {
    text-align: left;
    text-indent: 2rem;
  }

  .btn {
    margin: 0 auto;
  }

  .container > h1 {
    text-align: center;

  }

  hr {height: 0.1rem;}

  code {
    overflow-x: auto;
  }

  pre {
    background-color:rgb(238, 238, 238);
  }

  .firebase {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-column-gap: 0.3rem;
  }
 
  .firebase > input {
    border-radius: 0.3rem;
    padding: 0.3rem;
  }

  .key{
    background-color:lightgreen; 
    padding: 1rem; 
    border-radius: 0.5rem;
  } 

  .form{
    background-color: cadetblue;  
    border-radius: 0.5rem;
  }

  .field-pair {
    width: 95%;
    margin: 0 auto;  
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    border-radius: 0.3rem;
    padding-left: 0.5rem;
  }

  .btn-signup {
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.7rem;
    border-radius: 0.2rem;
    outline: none;
    background-color: rgb(36, 80, 85);
    color: white;
  }

  h5 {
    margin: 0;
    color: white;
  }
  
  /* Tablet/PC */
  @media only screen and (min-width: 600px){
    
    .form{
      display: grid;
    }
    
    .layout {
      grid-template-columns: auto [a]500px auto;
    }

    .field-pair {
      width: 95%;
      margin: 0 auto; 
      display: grid;
      grid-template-columns: 25% 75%;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }  
  }

</style>
