<template lang="pug">
  div#app
    Navbar.le-navbar
    transition(
      mode="out-in"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOutDown faster"
    )
      router-view.content
</template>

<script>
import Navbar from './components/global/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
  @import "@/components/global/_reset.sass"
  @include bootstrap-button-reset 
  @include margin-reset 
  @include padding-reset
  
  button
    display: inline-block
    border: none
    padding: 1rem 2rem
    margin: 0
    text-decoration: none
    background: #0069ed
    color: #ffffff
    font-family: sans-serif
    font-size: 1rem
    cursor: pointer
    text-align: center
    transition: background 250ms ease-in-out, transform 150ms ease
    -webkit-appearance: none
    -moz-appearance: none
    &:active
      transform: scale(0.95);

  #app
    display: grid
    grid-template-columns: auto
    grid-template-rows:auto auto
    grid-row-gap: 0px
    grid-template-areas: "navbar" "content"
  
  @media only screen and (min-width: 600px)
    #app 
      grid-template-rows: auto auto

  .content
    grid-area: content
    margin-top: 48px

  .le-navbar
    grid-area: navbar

  .fade-enter-active, 
  .fade-leave-active
    transition: opacity 0.07s

  .fade-enter, 
  .fade-leave-to
    opacity: 0
</style>
