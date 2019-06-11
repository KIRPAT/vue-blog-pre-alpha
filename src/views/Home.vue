<template>
  <div class="home-page-container">
    <HomeMessage class="home-message"/>
  </div>
</template>

<script>
import HomeMessage from '../components/view/home/HomeMessage'
export default {
  components: {
    HomeMessage
  }
}
</script>

<style scoped>
  .home-message {
    grid-area: home-page;
    margin-left: 1rem;
    margin-right: 1rem;
  }  

  @media only screen and (min-width: 600px){
    .home-page-container {
      display: grid;
      grid-template-columns: auto [home-page]500px auto;
    }  
  }
</style>
