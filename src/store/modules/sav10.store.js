import sav10SlideDefault from '@/data/slideContent/sav10Slide';
export default {
  state: sav10SlideDefault,
  getters: {
    reusable(state) {
      return state;
    },
  },
  mutations: {
    setSummaryOfProcedureAnalysis(state, imgPath) {
      state.summaryOfProcedureAnalysis = imgPath;
    },
  }
}
