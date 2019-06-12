<template lang="pug"> 
    div.super-quiz-layout
      div.super-quiz-container
        transition(
          mode="out-in"
          appear 
          enter-active-class="animated fadeIn faster"
          leave-active-class="animated fadeOut faster"
        )  
          component(
            :is="isGameActive ? quizComponent : resultComponent"
          )
</template>

<script>
import {mapGetters} from 'vuex'
import Quiz from '../components/view/superQuiz/Quiz'
import ResultCard from '../components/view/superQuiz/ResultCard'
export default {
  components: {
    Quiz,
    ResultCard,
  },
  data: () => ({
    quizComponent: 'Quiz',
    resultComponent: 'ResultCard'
  }),
  computed: {
    ...mapGetters(['isGameActive']) 
  }
}
</script>

<style scoped>
  .super-quiz-layout {
      display: grid;
      grid-template-columns: 2% [content]auto 2%
    }

  @media only screen and (min-width: 600px){
    .super-quiz-layout {
      grid-template-columns: auto [content]500px auto;
    }  
  }

  .super-quiz-container {
    grid-area: content;
    margin-top: 3rem;
  }  

  .layout-wrapper {
    height: 20rem;
    background-color: aquamarine;
  }
</style>
