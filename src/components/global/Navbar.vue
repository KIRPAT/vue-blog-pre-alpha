<template lang="pug">
  
  div.nav-bar-container
    
    div.nav-bar  
      
      div.home-button(@click="$router.push('/')") 
        p KIRPAT 
      
      div.dropdown
        div.dropbtn Examples
        div.dropdown-content
          a(@click="$router.push('/quotes')") Quotes 
          a(@click="$router.push('/routing')") Routing
          a(@click="$router.push('/fuzzy-search')") Fuzzy Search
          a(@click="$router.push('/animations')") Animations
          a(@click="$router.push('/super-quiz')") Super Quiz
</template>

<style scoped>
  * {margin: 0;}
  
  .nav-bar-container {
    position: fixed;
    width: 100%;
    z-index: 3;
  }

  .nav-bar{
    display: grid;
    grid-template-columns: 10% 8rem auto;
    grid-template-rows: 3rem;
    grid-template-areas: ". home-button dropdown";
    height: 3rem;
    background-color: #4c8492
  }


  @media only screen and (min-width: 600px){
    .nav-bar {
      grid-template-columns: 10% 8rem 10px auto 20%;
      grid-template-areas: ". home-button . dropdown .";
    }
  }

  .dropdown{
    grid-area: dropdown
  }

  .home-button {
    cursor: pointer;
    user-select: none;
    grid-area: home-button;
    background-color: #f09c67;
    display: flex;
    justify-content: center;   
  }

  .home-button:hover {
    background-color: #fbb386;
  }

  .home-button > p {
    color: aliceblue;
    font-size: 2rem;
    align-self: center;
  }

  .dropbtn {
  display: flex;
  background-color: #4c8492;
  color: white;
  height: 100%;
  width: 6rem;
  font-size: 16px;
  border: none;
  user-select: none;
  align-items: center;
  justify-content: center;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  user-select: none;
  cursor: pointer;
  background-color: #f1f1f1
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #599cad;
}
  
</style>
