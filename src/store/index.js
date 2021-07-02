import { createStore, createLogger } from "vuex"
import modules from './modules';

const store = createStore({
  strict: import.meta.env.DEV,
  state: {
    name: "Vue"
  },
  modules,
  plugins: [
    createLogger(),
  ]
})

export default store
