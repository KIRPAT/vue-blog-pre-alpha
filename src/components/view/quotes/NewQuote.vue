<template lang="pug">
  form
    div.new-quote-container
      p What is your quote?
      textarea(name="" id="" cols="5" rows="2" class="form-control" v-model.lazy.trim="quote")
    div.button-container
      button.btn.btn-primary(@click.prevent="createNew") Add Quote
    h5 
      |Lazy loaded quote v-model: <br>
      |{{quote}}
    p.practice-note
      | <br> v-model attribute can be chained. Such as: <br> 
      | v-model.lazy.number.trim <br> <br>
      a.guide-link(
        href="https://vuejs.org/v2/guide/forms.html" 
        target="_blank"
      ) Vue Guide - Forms 
      <br><br>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    quote: ''
  }),
  methods: {
    createNew() {
      if (!this.quote.trim() == '') {
        this.addQuote(this.quote)
      }
    },
    ...mapActions([
      'addQuote'
    ])
  }
}
</script>

<style lang="sass" scoped>
  @import "@/components/global/_reset.sass" 
  @include margin-reset
  @include bootstrap-button-reset

  //Mobile
  .button-container 
    display: grid
    grid-template-columns: [end] auto
  //Tablet
  @media only screen and (min-width: 600px)
    .button-container 
      display: grid
      grid-template-columns: auto [end] 15rem auto
  //PC
  @media screen and (min-width: 768px) 
    .button-container
      display: grid
      grid-template-columns: auto [end] 7rem
  
  .new-quote-container 
    p 
      margin-top: 1rem
      text-align: center
      font-family: 'Times New Roman', Times, serif
      font-size: 2rem

  h5 
    background-color: #eeee
    margin-top: 1rem
    text-align: center
    margin-bottom: 1rem
    padding: 1rem
    border-radius: 0.5rem

  .guide-link
    text-decoration: none 
    cursor: pointer
    font-size: 1.2rem
    background-color: white 
    padding: 0.5rem
    margin-bottom: 1rem
    border-radius: 0.3rem

  .practice-note
    background-color: #eeee;
    text-align: center
    margin-bottom: 1rem
    padding: 0.3rem
    border-radius: 0.5rem

  .btn
    grid-area: end
    margin-top: 0.5rem
    margin-bottom: 0.5rem
    &-primary
      background-color: rgb(12, 126, 88)
      border-color: aquamarine
      &:hover
        background-color: rgb(22, 206, 144)
</style>
