<template lang="pug">
  div.scroll-behaviour-container
    div.scroll-behaviour
      div.center-items
        p
          |I haven't implemented it, but the default 
          |browser behaviour of scrolling to the "# tag" of the 
          |URL does not work with vue-routes. 
        p
          |Sure, it works when you send an HTTP request, 
          |but vue-routes are not http requests. 
          |You need to pass an argument while using
          |vue-routes to have the desired # behaviour.  
        h1#the-start 
          |Beginning <br> 
          |#the-start
        hr
        div.tall-box
        hr(style="margin-top: 1rem")
        h1#the-end 
          |The End <br> 
          |#the-end
</template>

<script>
export default {

}
</script>

<style scoped>
  *{margin: 0}

  .scroll-behaviour {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-areas: ". center .";
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 600px) {
    .scroll-behaviour {
      grid-template-columns: auto 30rem auto;    
    }
  }

  .center-items{
    grid-area: center;
    text-align: left;
    text-indent: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .tall-box{
    height: 2000px;
    max-width: 100%;
    margin: 0;
    background-color: rgb(197, 156, 181);
  }

  h1 {
    text-indent: 0;
    text-align: center;
  }

  p {
    max-width: 100%;
  }

  hr {width: 100%; height: 1rem;}
  #the-end,#the-start {margin-top: 1rem;}
</style>
