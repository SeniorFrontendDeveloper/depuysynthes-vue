// import aapi service
import slides from "@/data/slides.json";
import defaultCustomerInternalTeam from "@/data/defaultCustomerInternalTeam.json"
import defaultStakeHolders from "@/data/defaultStakeHolders.json"
import defaultDiscoveries from "@/data/defaultDiscoveries.json";
import samplePublishedLinks from "@/data/publishedLinks.json"
import sampleRfps from "@/data/rfps.json"

export default {
  state: {
    publishedRfps: [],
    publishedLinks: samplePublishedLinks,
    myRfps: sampleRfps,
    defaultSlides: slides, // slides for new rfp
    selectedSlides: [], // new/edit rfp step 6 selected slides state
    
    currentRfp:{
      internalTeam: defaultCustomerInternalTeam,
      stakeHolders: defaultStakeHolders,
      discoveries: defaultDiscoveries,
      contract:{
        gpoAffilation:'',
        numberAndName:'',
        endDate:'',
        notes:''

      }
    } // new/edit rfp details
  },

  getters: {
    publishedRfps(state){
      return state.publishedRfps
    },

    getPublishedLinks(state){
      return state.publishedLinks
    },
    
    myRfps(state){
      return state.myRfps
    },

    getDraftRfps(state){
      return  state.myRfps.filter(rfp => rfp.isDraft)
    },
    
    getPublishedRfps(state){
      return  state.myRfps.filter(rfp => !rfp.isDraft)
    },
    
    sharedWithMe(state){
      return state.myRfps; // filter rfps shared with current user
    },

    getRfpByPresentatioId: (state) => (id) => {
      return state.myRfps.find(rfp => rfp.id === id)
    },

    getLinksByPresentationId: (state) => (id) => {
      let myRfp = state.myRfps.find(rfp => rfp.id === id); 

      if(myRfp) return myRfp.links;

      return [];
    },

    getCollaboratorsByPresentationId: (state) => (id) => {
      return state.myRfps.find(rfp => rfp.id === id)
    },

    defaultSlides(state){
      return state.defaultSlides;
    },
    
    selectedSlides(state){
      return state.selectedSlides
    },

    getCurrentRfp(state){
      return state.currentRfp
    }
  },

  
  mutations: {
    
    setPublishedRfps(state, payload) {
      state.publishedRfps = payload
    },
    
    setMyRfps(state, payload){
      state.myRfps = payload;
    },

    selectSlide(state, payload){
      state.selectedSlides.push(payload)
    },

    setCurrentRfp(state, payload){
      state.currentRfp = payload
    },

    addNewLink(state, payload){

      let presentation = state.publishedLinks.find(
        presentation => presentation.presentationId === payload.presentationId
      );

      presentation.links.push(payload);

      let tempPresentations = state.publishedLinks.filter(
        presentation => presentation.presentationId !== payload.presentationId
      )
      tempPresentations.push(presentation);

      state.publishedLinks = tempPresentations;
    }
  },

  actions: {
    publishLink({commit}, payload){
      commit('addNewLink', payload)
    }
  },

}