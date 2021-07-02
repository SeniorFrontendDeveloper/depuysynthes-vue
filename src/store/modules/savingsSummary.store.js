export default {
  state: {
    additinalSavings: {
      rigid: 223004,
      usf: 41875,
      esims: null,
      Biologics: null,
      power: null,
      'Rebate or NBI': null,
      Other: null,
    },
    procedureSavings: {
      standardization: null,
      offer: null,
      options: null
    },
  },
  getters: {
    additinalSavings(state) {
      return state.additinalSavings;
    },
    procedureSavings(state) {
      return state.procedureSavings;
    },
    savingSummary(state) {
      return {
        SavingSummaryData: state.procedureSavings,
        additionalSavingData: state.additinalSavings
      }
    },
  },
  mutations: {
    setAdditinalSavings(state, payload) {
      state.additinalSavings = payload
    },
    setProcedureSavings(state, payload) {
      state.procedureSavings = payload
    },
  },
  actions: {

  },
}
