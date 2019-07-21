<template lang="pug">
  div.layout
    div.container
      h1 Axios
      br 
      p 
        | I'm using a Axios as the HTTP client, and Firebase as my dummy API. 
        | Read/Write permissions are open to everyone. (Which means, no authentication.) 
        | Copy/Paste your own firebase URL with "the same permission". 
      code API Link: 
        <pre> {{urlLink}} </pre>
      code Permission: 
        <pre> {{permission}} </pre>
      div.key
        strong Paste your API link here.
        br
        div.firebase 
          input(v-model="firebaseUrl")
          button.btn.btn-success(@click="dummyPost") POST
        
        transition(
          mode="out-in"
          enter-active-class="animated fadeInDown faster"
          leave-active-class="animated fadeOut faster"
        )
          div(v-if="isPostSent")
            br
            strong Check your console.
      hr
      h1 Axios in Vuex
      br
      p 
        | Keep your API link in the input field (above), do not delete, we still need it.  
      p 
        | The POST Response is going to be stored in the vuex instance. 
        | The rest is easy, you can access it from anywhere using vuex getters.
      button.btn.btn-primary(@click="axiosPost([firebaseUrl, dummyItems])") POST
      hr
      p 
        | Just a quick note: I will be testing Authentication in the following example, "Authentication".
        | The read/write permissions will be different. 
        | You will find further instructions there, don't worry. 
      
</template>

<script>
import axios from 'axios' //Global one.
import {mapActions} from 'vuex'
export default {
  data: () => ({
    isPostSent: false,
    urlLink: `https://<your-database>.firebaseio.com/<your-key>.json`,
    permission:`{"rules": {".read": true, ".write": true}}`,
    firebaseUrl: '/test.json',
    dummyItems: {
      num: 1,
      number: 2
    },
  }),
  
  methods: {
    dummyPost(){
      this.isPostSent = true;
      axios.post(this.firebaseUrl, this.dummyItems)
        .then(res => console.log({
          message: 'Dummy Axios POST Response', 
          response: res,
        }))
        .catch(err => console.log({
          message: 'Dummy Axios POST Error', 
          error: err,
        })) 
    },
    ...mapActions(['axiosPost']),
  }
}
</script>

<style lang="sass" scoped> 
  @import "@/components/global/_reset.sass"
  @include bootstrap-button-reset

  /* Mobile */
  .layout
    display: grid
    grid-template-columns:[a] auto
    overflow-y: auto
  
  /* Tablet/PC */
  @media only screen and (min-width: 600px)
    .layout
      grid-template-columns: auto [a]500px auto

  .container
    grid-area: a
    display: grid
    grid-template-columns: minmax(0, auto)
    margin-top: 2rem
    p 
      text-align: left
      text-indent: 2rem
    h1
      text-align: center

  .btn
    margin: 0 auto

  hr  
    height: 0.1rem

  code
    overflow-x: auto

  pre
    background-color:rgb(238, 238, 238)

  .firebase
    display: grid;
    grid-template-columns: 4fr 1fr
    grid-column-gap: 0.3rem
    input
      border-radius: 0.3rem
      padding: 0.3rem
  .key
    background-color:lightgreen 
    padding: 1rem
    border-radius: 0.5rem
</style>
