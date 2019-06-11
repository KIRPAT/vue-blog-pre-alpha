<template lang="pug">
  div.dynamic-routing
    h3 Dynamic Routing
    p
      |Type in an id for "/routes/:id" in the url. <br> 
      |Like "/routes/10". <br>
    
      div.id-setter
        p Actually, let me help you:  <br>
        div.btn.btn-secondary(@click="pushToDynamicId") Go to 10
      
    p The route id is: {{id}}
</template>

<script>
export default {
  data: ()=>({
    id: '',
  }),

  methods: {
    setId(){
      this.$route.params.id == null 
        ? this.id = "none"
        :this.id = this.$route.params.id
    },
    pushToDynamicId() {
      this.$router.push("/routing/dynamic-routing/10")
    }
  },

  watch: {
    '$route'(to, from){
      this.id = to.params.id;
    }
  },

  mounted() {
    this.setId();
  }
}
</script>

<style scoped>
  .id-setter {
    display: inline-flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .id-setter > p {
    margin:0;
  }
  .dynamic-routing{
    text-align: center;
    margin-top: 1rem;
  }
</style>
