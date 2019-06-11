/*
  So.. I'm no longer using this store.
  But I will keep it for the reference. 
  
  I have created this vuex store to quickly populate side bar navigation of routing examples.
  It was entering the link name, and the route by hand each time I created an exercise view. 

  Then I have discovered that I can directly access to the routes array
  of the vue-router. 
  
  this.$router.options.routes[]
  
  So.. this store is no longer needed. 
*/
export const contentNavItems = {
  state:{
    contentNavItems: [
      {route: "/routing/push-home", name: "Push The Home Route"},      
      {route: "/routing/dynamic-routing", name: "Dynamic Routing"},
      {route: "/routing/named-route-view", name: "Named Route View"},
      {route: "/routing/scroll-behaviour", name: "Scroll Behaviour"},
    ],
  },

  getters: {
    contentNavItems: state => {
      return state.contentNavItems
    },
  },

  mutations: {
    addContentNavItem: (state, payload) => {
      state.contentNavItems.unshift(payload)
    },
  },

  actions: {
    addContentNavItem: ({commit}, payload) => {
      commit('addContentNavItem', payload)
    },
  },
}