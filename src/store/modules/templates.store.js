// import aapi service

export default {
  state: {
    templates:[],
    currentTemplate:{}, // create/edit template inprogres state 
  },

  getters: {
    templates(state){
      return state.templates
    },

    myTemplates(state) {
      return state.templates; // TODO: filter current user templates 
    },

    recentlyUsedTemplates(state){

      return state.templates; // TODO: filter recently used templates
    },

    newTemplate(state) {
      return state.newTemplate;
    },

   
  },

  
  mutations: {
    
    setTemplates(state, payload) {      
      state.templates = payload
    },

    setCurrentTemplate(state, payload) {
      state.newRfp = payload
    },
  },

  actions: {},

}