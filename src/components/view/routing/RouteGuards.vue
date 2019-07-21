<template lang="pug">
  div.route-guard-container
    div.route-guard-elements
      
      h3 Route Guards Again    
      
      p
        |Route Guards can be used for user authentication. 
        |Before entering, upon updating, or leaving a route, you can check stuff.
      
      p Check the console. 

      div.id-setter
        p
          |Update the route, go to "/route-guards/10" via the following button. 
          |That button uses vue-router, normal HTTP requests won't work.<br>
      div.btn.btn-secondary(@click="pushToDynamicId") Go to 10
</template>

<script>
export default {
  methods: {
    pushToDynamicId() {
      this.$router.push("/routing/route-guards/10")
    }
  },

  beforeRouteEnter(to, from, next) {
    /*
      The vue instance of this component not yet created. 
      You can not access, for example, "data" here, 
      But you can write a callback in the "next()" 
    */
    console.log('Inside the component, "beforeRouteEnter"')
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('Inside the component, "beforeRouteUpdate"')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('Inside the component, "beforeRouteLeave"')
    next()
  } 
}
</script>

<style lang="sass" scoped>
  .route-guard-container
      display: grid
      grid-template-columns: auto auto auto
      grid-template-areas: "center center center"
      margin-left: 1rem
      margin-right: 1rem
      margin-top: 1rem
      margin-bottom: 1rem
  
  @media only screen and (min-width: 600px) 
    .route-guard-container 
      grid-template-columns: auto minmax(auto, 500px) auto
      grid-template-areas: ". center ."
          
  .route-guard-elements
    grid-area: center
    display: flex
    flex-direction: column
  
  p
    text-align: left
    text-indent: 1rem

  h3 
    text-align: center

  .btn
    text-indent: 0
    margin: 0 auto
</style>
