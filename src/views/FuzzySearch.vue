<template lang="pug">
  div.fuzzy-search-view-container
    div.fuzzy-search-view
      h1 Search a Game!
      h5 {{formInput}}
      input.input-field(v-model="formInput")
      ul
        li(v-for="result in filteredResults") {{ result }}    
</template>

<script>
import { fuzzySearch } from "../middleware/mixins/fuzzySearch"
export default {
  mixins: [fuzzySearch]
}
</script>

<style scoped>
  .fuzzy-search-view-container{
    display: grid;
    grid-template-columns: 1% [body]auto 1%
  }

  @media only screen and (min-width: 600px){
    .fuzzy-search-view-container {
      grid-template-columns: auto [body]500px auto;
    }  
  }
  
  .fuzzy-search-view {
    margin-top: 3rem;
    grid-area: body;
    text-align: center;
  }

  .fuzzy-search-view > ul {
    list-style: none
  }

  .input-field {
    width: 80%;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    box-shadow: none;
    border: solid orange 0.1rem;
  }

  .input-field:focus {
    outline: none;
    
  }

</style>
