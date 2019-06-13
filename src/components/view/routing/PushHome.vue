<template lang="pug">
  div.pushHome
    h3 Push Home
    p Press the button to push Home page!
    div.btn.btn-secondary(@click="navigateToHome") Go Home 
</template>

<script>
export default {
  methods: {
    navigateToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .pushHome{
    margin-top: 1rem;
    text-align: center;
  }
  .box{
    width: 200px;
    height: 200px;
    background-color: black;
  }

</style>
