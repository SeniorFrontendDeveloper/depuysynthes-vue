import sav23SlideDefault from '@/data/slideContent/sav23Slide';

export default {
  state: sav23SlideDefault,
  getters: {
    sav23Slide(state) {
      return state;
    },
  },
  mutations: {
    setSummaryOfProcedureAnalysis(state, imgPath) {
      state.summaryOfProcedureAnalysis = imgPath;
    },
  }
}
