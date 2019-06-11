export const superQuiz = {
  state:{
    number: {
      A: 0,
      B: 0,
    },
    correctAnswer: 0,
    option: [0,0,0,0],
    shuffled: [0],
    operation: false, // + or -
    latestResult: false, // win or loose
    isGameActive: true, // initially active (No Start Menu)
  },

  getters: {
    numbers: state => [
      state.number, 
      state.option, 
      state.operation, 
      state.correctAnswer
    ],
    latestResult: state => state.latestResult,
    isGameActive:  state => state.isGameActive,
  },

  mutations: {
    setLatestResult: (state, payload) => {
      state.correctAnswer == payload
        ? state.latestResult = true
        : state.latestResult = false 
    },

    toggleGameActive: state => {
      state.isGameActive = !state.isGameActive
    },

    setGame: state => {
      // Random Number generator
      function customRandom(factor){
        return Math.floor(Math.random()*factor)
      }

      // Fisher-Yates array shuffle function.
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = customRandom(i+1); 
          [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array
      }
      
      //Set initial result to false.
      state.latestResult=false
      
      //Generate two numbers
      state.number.A = customRandom(100)
      state.number.B = customRandom(100)
      
      //Set Opeartion Type
      let number = customRandom(10) % 2
      console.log(number);
      number == 0 
        ? state.operation = false
        : state.operation = true
      
      //Determine The Correct Answer  
      state.operation 
        ? state.correctAnswer = state.number.A + state.number.B
        : state.correctAnswer = state.number.A - state.number.B 
        
      //Assign initial values. (Only four options, no need for a loop.)
      state.option[0] = state.correctAnswer
      state.option[1] = customRandom(1000)
      state.option[2] = customRandom(100)
      state.option[3] = customRandom(10)
      
      // Shuffle 'em.
      state.shuffled = shuffle(state.option)
      console.log(state.shuffled)
    }
  },

  actions: {
    toggleGameActive:  ({commit}) => {
      commit('toggleGameActive')
    },

    setGame: ({commit}) => {
      commit('setGame')
    },

    setLatestResult: ({commit}, payload) => {
      commit('setLatestResult', payload)
    },
  },
}