export default {
  state: {
    customSlides: [],
    customSlide: {
      title: "",
      subTitle: "",
      position: 1,
      image1: "",
      image2: "",
      image3: ""
    }
  },
  getters: {
    allCustomSlides(state) {
      return state.customSlides;
    },
    customSlide(state) {
      return state.customSlide;
    }
  },
  mutations: {
    setCustomSlide(state, customSlide) {
      state.customSlide.title = customSlide.title
      state.customSlide.subTitle = customSlide.subTitle
      state.customSlide.position = state.customSlides.length + 1
      state.customSlide.image1 = customSlide.image1;
      state.customSlide.image2 = customSlide.image2;
      state.customSlide.image3 = customSlide.image3;
    },
    saveCustomSlide(state) {
      state.customSlides.push(state.customSlide);
      console.log("all custom slides:: ", state.customSlides)
    }
  },
}
