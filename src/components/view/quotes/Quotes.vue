<template lang="pug">
  div.the-quotes-container
    p.practice-note
      |All quotes have been stored in the vuex instance.
    div.quotes-container
      Quote.le-quote(
        v-for="(quote, index) in quotes" 
        :key="index" 
        @click.native="deleteQuote(index)"
      ) {{quote}} 
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Quote from './Quote'
export default {
  components: {
    Quote
  },
  methods: {
    ...mapActions([
      'deleteQuote'
    ])
  },
  computed: {
    ...mapGetters([
      'quotes'
    ])
  } 
}
</script>

<style scoped>
  .quotes-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.3rem;
  }

  .practice-note {
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .le-quote {
    display: flex;
    align-items: center;
    background-color: #eeeded;
    justify-content: center;
  }
  @media only screen and (min-width: 600px){
    .quotes-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (min-width: 768px){
    .quotes-container {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
