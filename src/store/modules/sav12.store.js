import sav12SlideDefault from '@/data/slideContent/sav12Slide';
export default {
  state: sav12SlideDefault,
  getters: {
    fragment(state) {
      return state;
    },
  },
  mutations: {
    setSummaryOfProcedureAnalysis(state, imgPath) {
      state.summaryOfProcedureAnalysis = imgPath;
    },
  }
}
