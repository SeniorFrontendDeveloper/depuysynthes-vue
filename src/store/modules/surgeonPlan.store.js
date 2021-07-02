import surgeonPlan from "@/data/slideContent/surgeonPlan.json";
import overviewContent from "@/data/slideContent/overviewContent.js";

export default {
  state: {
    "Total available trauma business in hospital": surgeonPlan["Total available trauma business in hospital"],
    overviewContent: overviewContent,
    surgeonPlanRows: surgeonPlan.doctors
  },
  getters: {
    "Total available trauma business in hospital"(state) {
      return state["Total available trauma business in hospital"];
    },
    overviewContent(state) {
      return state.overviewContent;
    },
    surgeonPlanRows(state) {
      return state.surgeonPlanRows;
    },
    surgeonPlan(state) {
      return {
        "Total available trauma business in hospital": state["Total available trauma business in hospital"],
        doctors: state.surgeonPlanRows,
      }
    },
  },
  mutations: {
    setHospitalTrauma(state, payload) {
      state["Total available trauma business in hospital"] = payload
    },
    setOverview(state, payload) {
      state.overviewContent = payload
    },
    setSurgeonPlanRows(state, payload) {
      state.surgeonPlanRows = payload
    },
    addSurgeonPlanRow(state, payload) {
      state.surgeonPlanRows.push(payload)
    },
  },
}
