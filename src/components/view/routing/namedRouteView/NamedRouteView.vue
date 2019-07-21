<template lang="pug">
  div.named-route-view-container
    div.named-route-view-elements
      hr
      p
        |For some reason, default and named routes do not work when pushing the page 
        |using the "name of the route", not the "path of the route". 
        |If you refresh the page, you can see two more items.
        |I will look at that later.
      hr
      router-view
      router-view(name="named-view")
      hr
</template>

<style lang="sass" scoped>
  .named-route-view-container
    display: grid
    grid-template-columns: auto auto auto
    grid-template-areas: ". center ."
    margin-right: 1rem
    margin-left: 1rem
    margin-top: 1rem
    margin-bottom: 1rem

  @media only screen and (min-width: 600px)
    .named-route-view-container 
      grid-template-columns: auto 30rem auto

  .named-route-view-elements
    grid-area: center
    text-align: left
    text-indent: 2rem
</style>
