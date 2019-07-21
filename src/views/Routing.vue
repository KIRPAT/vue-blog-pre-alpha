<template lang="pug">
  div.routing-view
    div.content-nav
      ContentNav(
        :parentPath="parentPath" 
        :items="$router.options.routes[2].children"
      )
      p
    transition(
      name="fade" 
      mode="out-in"
    ) 
      router-view.routing-example#cn
</template>

<script>
//import {mapGetters} from 'vuex'
import ContentNav from '../components/global/ContentNav'
import { setInterval } from 'timers';
export default {
  components: {
    ContentNav
  },

  computed: {
    parentPath() {
      return this.$router.options.routes[2].path
    },
  },
}
</script>

<style lang="sass" scoped>
  // Mobile Routing
  .routing
    &-view
      display: grid
      grid-template-columns: auto
      grid-template-areas: "content-nav" "routing-example"
    &-example
      grid-area: routing-example

  .content-nav
    grid-area: content-nav
    width: 100%
  
  // Tablet Breakpoint
  @media only screen and (min-width: 600px)
    .routing-view
      grid-template-columns: 15rem auto
      grid-template-areas: "content-nav routing-example"
    .content-nav
      display: flex
      flex-direction: column
      height: 100%
      width: 15rem
      position: fixed

  // PC Breakpoint
  @media only screen and (min-width: 970px)
    .routing
      &-view
        grid-template-columns: auto 15rem 5rem 30rem auto
        grid-template-areas: ". content-nav . routing-example ."
        position: relative
      &-example
        margin-top: 4rem
    
    .content-nav
      display: flex
      flex-direction: column
      height: 100%
      width: 15rem
      position: fixed
      left: 15%
  
  // Animations
  .fade-enter-active, 
  .fade-leave-active
    transition: opacity 0.07s
  /* .fade-leave-active below version 2.1.8 */
  .fade-enter, 
  .fade-leave-to
    opacity: 0
</style>
