<template lang="pug">
  div.routing-view
    ContentNav.content-nav(
      :parentPath="parentPath" 
      :items="$router.options.routes[2].children")
    transition(name="fade" mode="out-in")
      router-view.routing-example
</template>

<script>
//import {mapGetters} from 'vuex'
import ContentNav from '../components/global/ContentNav'
export default {
  components: {
    ContentNav
  },

  computed: {
    //I used to keep the route list inside the vuex instance. 
    //Now I learned that I can directly acces to the routes list.
    /*
    ...mapGetters([
      'contentNavItems'
    ])
    */
    parentPath() {
      return this.$router.options.routes[2].path
    }
  }
}
</script>

<style scoped>
  .routing-view{
    display: grid;
    grid-template-columns: auto;
    grid-template-areas: "content-nav"
                         "routing-example";
  }

  .routing-example{
    grid-area: routing-example
  }

  .content-nav {
    grid-area: content-nav;
    width: 100%;
  }
  
  @media only screen and (min-width: 600px) {
    .routing-view {
      grid-template-columns: 15rem auto;
      grid-template-areas: "content-nav routing-example";
    }
    .content-nav {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 15rem;
      position: fixed;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.07s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
