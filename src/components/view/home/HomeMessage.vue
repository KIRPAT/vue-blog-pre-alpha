<template lang="pug">
  div.layout
    div.container
      img(src="@/assets/rotterdam.jpg.png")
      div.text
        h2 Hello there! <br> This is KIRPAT. 
        p
          | I have been practicing Vue, CSS (with SASS & grids) and a little bit of Bootstrap.
          | Take a look at the examples from the navigation. <br>
</template>

<style lang="sass" scoped>
  .layout
    display: grid
    grid-template-columns:[a] auto

  .container
    grid-area: a
    display: grid
    grid-template-columns: minmax(0, auto)
    margin-top: 2rem    
    p 
      text-align: left
      text-indent: 2rem
    h1
      text-align: center
    img 
      max-width: 10rem
      margin: 0 auto
      border-radius: 0.5rem
  
  .text 
    margin-top: 1rem
    text-align: center
      
  /* Tablet/PC */
  @media only screen and (min-width: 600px)
    .container 
      width: auto
      display: grid
      grid-template-columns:[b] auto [c] auto
      grid-column-gap: 1rem
      margin-top: 4rem
      img 
        grid-column-start: b
        max-width: 20rem
  
    .text 
      grid-column-start: c
      margin: auto
      max-width: 300px
</style>
