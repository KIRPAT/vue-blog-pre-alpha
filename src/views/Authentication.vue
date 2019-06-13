<template lang="pug">
  div.layout
    div.container
      h1 (WIP) Authentication
      p
        |Vue is designed as an SPA framework, 
        |and the authentication proccess works a little different here. We need an Auth Token. CS
      p 
        |I've used Firebase again for dummy authentication.
        |This time though, I have activated the E-mail sign up option, 
        |and changed the read/write permissions.
      code Permission: 
        <pre> {{permission}} </pre>
      p 
        |Now, I think we can use Firebase SDK and sign a new user.
        |Let's see:  
      
</template>

<script>
export default {
  data: () => ({
    permission: `{"rules": {".read": "auth != null", ".write": true}}`,
  })
}
</script>

<style scoped>
  .btn:focus{
    outline: none !important;
    box-shadow: none !important;
  }

  .layout{
    display: grid;
    grid-template-columns:[a] auto;
    overflow-y: auto;
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
    grid-template-columns: minmax(0, auto);
    margin-top: 2rem;
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

  hr {height: 0.1rem;}

  code {
    overflow-x: auto;
  }

  pre {
    background-color:rgb(238, 238, 238);
  }

  .firebase {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-column-gap: 0.3rem;
  }
  .firebase > input {
    border-radius: 0.3rem;
    padding: 0.3rem;
  }

  .key{
    background-color:lightgreen; 
    padding: 1rem; 
    border-radius: 0.5rem;
  } 
</style>
