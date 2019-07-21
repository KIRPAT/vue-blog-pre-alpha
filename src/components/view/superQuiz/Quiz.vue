<template lang="pug">
  div.quiz-layout
    div.question
      p What is {{numbers[0].A}} {{numbers[2] == true ? "+" : "-"}} {{numbers[0].B}} ?
    div.options
      button.btn.btn-primary(
        v-for="number in numbers[1]"
        @click="showResult(number)"
      ) {{number}}
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'setGame',
      'setLatestResult',
      'toggleGameActive'
    ]),
    showResult(value) {
      this.setLatestResult(value)
      this.toggleGameActive()
    }
  },
  
  computed: {
    ...mapGetters([
      'numbers',
      'latestResult'
    ])
  },

  mounted() {
    this.setGame();
  },
}
</script>

<style lang="sass" scoped>
  @import "@/components/global/_reset.sass"

  .quiz-layout 
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: [question] auto [options] auto;
  
  .question
    padding: 0.5rem
    border-top-left-radius: 0.5rem
    border-top-right-radius: 0.5rem
    grid-row-start: question
    display: inline-flex
    justify-content: center
    background-color: #dcffe9
    box-shadow: -1px 3px 13px -4px rgba(0,0,0,0.59)
  
  .options
    padding: 1rem
    border-bottom-left-radius: 0.5rem
    border-bottom-right-radius: 0.5rem
    grid-row-start: options
    background-color: #d8eff0
    display: grid
    grid-template-columns: 1fr 1fr
    grid-row-gap: 1rem
    box-shadow: -1px 3px 13px -4px rgba(0,0,0,0.59)
  
  .btn
    width: 4rem
    margin: 0 auto
</style>
