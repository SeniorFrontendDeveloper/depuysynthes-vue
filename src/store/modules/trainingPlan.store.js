import trainingPlanDefault from "@/data/slideContent/trainingPlan.js"

export default {
  state: trainingPlanDefault,
  getters: {
    timelines(state) {
      return state.timelines;
    },
    header(state) {
      return state.header;
    },
  },
  mutations: {
    setHeader(state, payload) {
      state.header = payload
    },
    setTimelines(state, payload) {
      state.timelines = payload
    },
  },
  actions: {

  },
}