import industryFieldDefault from "@/data/slideContent/industryField.js"

export default {
  state: JSON.parse(JSON.stringify(industryFieldDefault)),
  getters: {
    address(state) {
      return state.address;
    },
    experience(state) {
      return state.experience;
    },
    consultants(state) {
      return state.consultants;
    },
  },
  mutations: {
    setExperience(state, payload) {
      state.experience = JSON.parse(JSON.stringify(payload))
    },
    setConsultants(state, payload) {
      state.consultants = JSON.parse(JSON.stringify(payload))
    },
    setAddress(state, payload) {
      state.address = JSON.parse(JSON.stringify(payload))
    },
  },
}