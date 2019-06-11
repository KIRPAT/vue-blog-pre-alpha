<template lang="pug">
  div.home-text
    img(src="@/assets/MaviGolem.jpg")
    br
    br
    h3 Wellcome to KIRPAT's <br> Vue practices home page. 
    br
    p
      | I have been practicing Vue, CSS (with grids) and a little bit of Bootstrap.
      | Take a look at the examples from the navigation. <br>
</template>

<script>
export default {

}
</script>

<style>
  .home-text {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .home-text > img {
    max-width: 10rem;
  }
</style>
