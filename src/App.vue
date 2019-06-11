<template lang="pug">
  div#app
    Navbar.le-navbar
    transition(name="fade" mode="out-in")
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

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows:auto auto;
    grid-row-gap: 0px;
    grid-template-areas:"navbar" 
                        "content";
  }
  
  @media only screen and (min-width: 600px) {
    #app {
      grid-template-rows: auto auto;    
    }
  }

  @media only screen and (min-width: 768px) {}

  .content {
    grid-area: content;
    margin-top: 48px;
  }

  .le-navbar {
    grid-area: navbar;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.07s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
