<template lang="pug">
  div.result-card-layout(
    :style="{backgroundColor: latestResult ? win.color : lose.color}"
    @click="startGame"
  ) 
    button.btn(
      :class="latestResult ? win.button : lose.button"
    ) {{latestResult ? win.message : lose.message}}
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data: () => ({ 
    win: {
      message: "Correct!",
      color: '#b0e0a8',
      button: 'btn-success'
    },

    lose: {
      message: "Ups, try again. ^^",
      color: '#f3c1c6',
      button: 'btn-danger'
    }
  }),
  
  methods: {
    ...mapActions([
      'setGame',
      'toggleGameActive'
    ]),

    startGame() {
      this.setGame()
      this.toggleGameActive()
    }
  },

  computed: {
    ...mapGetters(['latestResult'])
  }
}
</script>

<style lang="sass" scoped>
  @import "@/components/global/_reset.sass"
  @include bootstrap-button-reset
  @include margin-reset

  .result-card-layout
    display: grid
    grid-template-rows: [a] 3.5rem [b] 3rem  [c] 3.5rem [d]
    border-radius: 0.5rem

  button
    grid-row-start: b
    margin: 0 auto

  .btn
    &:active
      border: none
</style>
