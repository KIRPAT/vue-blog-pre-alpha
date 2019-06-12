<template lang="pug">
  div.animations-layout
    div.animations-view-container
      
      h1 CSS Driven Animations
      
      p 
        | Note-to-self: Look for a way 
        | if you can know an item is on the screen or not. 
        | I wanna do "slide in as you scroll down" animation. 
      p 
        | I know it is possible with jQuerry, but I don't wanna use it.
        | Lesser the dependencies, better the initial load speed.
      
      p Animated library has been used for ease. 
      
      br

      button.btn.btn-primary(@click="show = !show") {{show ? "Hide" : "Show"}}
      
      div.animation-block#css-block
        transition(
          mode="out-in"
          name="slide" 
          appear
        )
          div.alert.alert-info(v-if="show" key="show") Vanilla CSS | To Be!
          div.alert.alert-info(v-if="!show" key="hide") Vanilla CSS | Or Not To Be!      
        
        transition(
          mode="out-in"
          appear 
          enter-active-class="animated fadeInUp faster"
          leave-active-class="animated fadeOutDown faster"
        )
          div.alert.alert-info(v-show="show") Animated.css | Fade and Slide (on loading page also)
        
        transition(
          mode="out-in"
          name="slide" 
          appear
        )
          div.alert.alert-info(v-if="show") Vanilla CSS | Fade and Slide (on loading page also)  
      
      hr
      h1 JS Driven Animations
      p Like the vue components, transitions have lifecycle hooks too. You can trigger JS methods using them.  
      br
      
      button.btn.btn-primary(
        @click="load = !load"
      ) {{load ? "Hide" : "Show"}}
      
    
      transition(
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        :css="false"
        @leave-cancelled="leaveCancelled"
      )
        div.alert.alert-info(
          v-if="load" 
          style="align-self: center"
        ) JS Animation Lifecyle Hooks (Open your console!)

      hr
      h1 Transition Groups
      br

      button.btn.btn-primary(@click="addNumber") Add Number
      br
      br
      ul.list-group
        transition-group(
          name="slide"
        )
          li.list-group-item(
            v-for="(number, index) in numbers" 
            style="user-select:none; cursor:pointer"
            @click="removeNumber(index)"
            :key="number"
          ) {{number}}
      br 
      br 
      div(style="height: 500px;")
</template>

<script>
export default {
  data: ()=>({
    show: true,
    load: true,
    numbers: [1,2,3,4,5]
  }),
  methods: {
    //Animation Lifecycle Hooks
    beforeEnter: (el) => console.log("Before Enter"),
    enter: (el, done) => {
      console.log("Enter")
      //Asyncronous code here maybe?
      done() //Use done(), when the async request resolves.
    },
    afterEnter: (el) => console.log("After Enter"),
    enterCancelled: (el) => console.log("Enter Cancelled"),
    
    beforeLeave: (el) => console.log("Before Leave"),
    leave: (el, done) => {
      console.log("Leave.")
      //Just like Enter
      done();
    },
    afterLeave: (el) => console.log("After Leave"),
    leaveCancelled: (el) => console.log("Leave Cancelled"),
    
    //Transition Groups
    addNumber() {
      const arrayPosition = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(arrayPosition, 0, Math.random() * 10) 
    },
    removeNumber(index) {
      this.numbers.splice(index,1)
    }
  }  
}
</script>

<style scoped>
  /*Mobile*/
  .animations-layout{
    display: grid;
    grid-template-columns: 1% [content]auto 1%
  }
  
  /*Tablet/PC*/
  @media only screen and (min-width: 600px){
    .animations-layout {
      grid-template-columns: auto [content]500px auto;
    }  
  }
  
  .animations-view-container {
    margin-top: 3rem;
    grid-area: content;
    text-align: center;
  }

  .animations-view-container > p {
    text-align: left;
    text-indent: 1.5rem;
    width: 80%;
    margin: 0 auto;
  }

  .animations-view-container > h1 {
    margin-bottom: 2rem;
  }

  hr {
    width: 90%;
    height: 0.1rem;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  .alert {
    width: 80%;
    margin: 1rem auto;
  }

  .animation-block{
    margin-top: 1rem; 
    margin-bottom: 2rem;
    background-color: beige;
    padding: 2rem 0;
    border-radius: 1rem;
  }

  #css-block {
    height: 20rem;  
  }



  /*Animations*/

  /*Slide*/
  .slide-enter-active {
    animation: slide-in 0.3s ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 0.1s ease-out forwards;
  }
  .slide-move {
    transition: transform 0.5s;
  }
  @keyframes slide-in {
    from {opacity: 0; transform: translateY(-2rem)}
    to {opacity: 1; transform: translateY(0)}    
  }
  @keyframes slide-out {
    from {opacity: 1; transform: translateY(0)}
    to {opacity: 0; transform: translateY(-2rem)}    
  }
</style>
