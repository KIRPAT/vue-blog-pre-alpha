<template lang="pug">
  div.content-nav     
    //-
      <div class="nav-items" v-for="item in items" :key="item.route">
        <div class="nav-item" @click="$router.push(item.route)">    
          <a> {{item.name}} </a> 
        </div>
      </div>
    div.nav-items(v-for="item in items" :key="item.path")
      div.nav-item(@click="$router.push({name: item.name})")     
        a {{item.name}}     
</template>

<script>
export default {
  props: {
    parentPath: {
      Type: String,
      required: true
    },
    items: {
      Type: Array,
      required: true,
    }
  },
}
</script>

<style>
  .content-nav {
    margin: 0;
    /* background-color: #fff7e2; */
    overflow-y:auto; 
    margin-top: 0.2rem;
  }
  .nav-items{
    margin: 0 0.5rem;
    color: white;
    text-align: center;
    background-color: #3e7e91;
    cursor: pointer;
    user-select: none; 
    border-bottom: #131463 solid 0.1rem;
    margin-bottom: 0.2rem;
    border-radius: 0.3rem;
  } 
  .nav-item {
    cursor: pointer;
    user-select: none;
    margin-bottom: 0.1rem;
  }
  .nav-items:hover {
    background-color: #599cad;
  }

  .nav-item > a {
    display: flex;
    justify-content: center;
  }
</style>
