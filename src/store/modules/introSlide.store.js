import introSlideDefault from "@/data/slideContent/introSlide.js"

export default {
  state: introSlideDefault,
  getters: {
    introSlide(state) {
      return state;
    },
  },
  mutations: {
    setTitle(state, title) {
      state.title = title
    },
    setSubTitle(state, subTitle) {
      state.subTitle = subTitle
    },
    setLogo(state, logo) {
      state.logo = logo
    },
    setIntroSlide(state, introSlide) {
      state.title = introSlide.title
      state.subTitle = introSlide.subTitle
      state.logo = introSlide.logo
    },
  },
}
