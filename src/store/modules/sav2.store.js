import sav2SlideDefault from '@/data/slideContent/sav2Slide';

export default {
  state: sav2SlideDefault,
  getters: {
    sav2Slide(state) {
      return state;
    },
    isDataFromCommercialExcellenceTeam(state) {
      return state.dataFromCustomerExcellenceTeam;
    }
  },
  mutations: {
    setFromCustomerExcellenceTeam(state, val) {
      state.dataFromCustomerExcellenceTeam = val;
    },
    setSummaryOfProcedureAnalysis(state, imgPath) {
      state.summaryOfProcedureAnalysis = imgPath;
    },
    setVendorsShare(state, imagePath) {
      state.vendorsShare = imagePath;
    }
  }
}
