<template lang="pug">
  div.layout
    div.container
      h1 Axios
      br 
      p 
        | Open your console, and click the button! 
      p  
        | I have installed Axios, but the vue instance is not yet "using" it!
        | I'm importing it in the component each time I'm needing it.
        | That will change! 
      button.btn.btn-primary Console 
</template>

<script>
export default {

}
</script>

<style scoped> 
  .btn:focus{
    outline: none !important;
    box-shadow: none !important;
  }

  .layout{
    display: grid;
    grid-template-columns: 2% [a]auto 2%
  }
  
  /* Tablet/PC */
  @media only screen and (min-width: 600px){
    .layout {
      grid-template-columns: auto [a]500px auto;
    }  
  }

  .container{
    grid-area: a;
    display: grid;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 5rem;
  }

  .container > p {
    text-align: left;
    text-indent: 2rem;
  }

  .btn {
    margin: 0 auto;
  }

  .container > h1 {
    text-align: center;

  }
</style>
