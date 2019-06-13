<template lang="pug">
  div.layout
    div.container
      img(src="@/assets/rotterdam.jpg.png")
      div.text
        h3 Wellcome to KIRPAT's <br> Vue practices home page. 
        p
          | I have been practicing Vue, CSS (with grids) and a little bit of Bootstrap.
          | Take a look at the examples from the navigation. <br>
</template>

<script>
export default {

}
</script>

<style scoped>
  .layout{
    display: grid;
    grid-template-columns:[a] auto;
  
  }

  .container{
    grid-area: a;
    display: grid;
    grid-template-columns: minmax(0, auto);
    margin-top: 2rem;
    
  }

  .container > p {
    text-align: left;
    text-indent: 2rem;
  }

  .container > h1 {
    text-align: center;
  }

  .text {
    margin-top: 1rem;
    text-align: center;
  }
  .container > img {
    max-width: 10rem;
    margin: 0 auto;
    border-radius: 0.5rem;
  }

  /* Tablet/PC */
  @media only screen and (min-width: 600px){
    
    .container {
      width: auto;
      display: grid;
      grid-template-columns:[b] auto [c] auto;
      grid-column-gap: 1rem;
    }

    .container > img {
      grid-column-start: b;
      max-width: 20rem;
    }
    
    .text {
      grid-column-start: c;
      margin: auto;
      max-width: 300px;
    }

  }
</style>
