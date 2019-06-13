<template lang="pug">
  transition(
    mode="out-in" 
    enter-active-class="animated slideInDown faster"
    leave-active-class="animated slideOutUp faster"
  )
    div.nav-bar-container(v-if="showNavbar")  
      div.nav-bar  
        div.home-button(@click="$router.push('/')") 
          p KIRPAT 
        div.dropdown
          div.dropbtn Examples
          div.dropdown-content
            a(@click="pushRouteHideNav('/quotes', $event)") Quotes 
            a(@click="pushRouteHideNav('/routing', $event)") Routing
            a(@click="pushRouteHideNav('/fuzzy-search', $event)") Fuzzy Search
            a(@click="pushRouteHideNav('/animations', $event)") Animations
            a(@click="pushRouteHideNav('/super-quiz', $event)") Super Quiz
            a(@click="pushRouteHideNav('/axios', $event)") Axios
            a(@click="pushRouteHideNav('/authentication', $event)") Authentication
</template>

<script>
export default {
  data: () => ({
    showNavbar: true,
  }),
  
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    /*
      This is a Single Page App. 
      When you use SPA routes, you do not get another HTML page. 
      You just infect/eject pages you already got.
      
      If you are on mobile, nav items do not lose focus because of that.
      You change the page, but the nav alement stays there. 
      mobileFix() is a dirty way to fix that. 
    */    
    mobileFix(element){
      var el = element;
      var par = el.parentNode;
      var next = el.nextSibling;
      par.removeChild(el);
      setTimeout(function() {par.insertBefore(el, next);}, 400)
    },

    pushRouteHideNav(route, event){
      this.mobileFix(event.target)
      this.$router.push(route)
    },

    onScroll () {
     const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      //Prevents Hyper Sensitive Hide/Show
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>


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
    background-color: #4c8492;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.20);
  }


  @media only screen and (min-width: 600px){
    .nav-bar-container{
      width: 98%;
      margin-left: 1%;
    }

    .nav-bar {
      grid-template-columns: auto 8rem 10px auto auto;
      grid-template-areas: ". home-button . dropdown auto";
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
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
    width: 1rem;
    
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
