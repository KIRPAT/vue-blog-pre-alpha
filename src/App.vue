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

<style>
  * {
    margin: 0;
    padding: 0;
  }

  button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}

button:hover,
button:focus {
    background: #0053ba;
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
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
