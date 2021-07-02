import { completeNewPassword, forgotPassword, signin, signout,currentAuthenticatedUser} from '@/api/httpClient.js'


const getDefaultState = () => {
  return {
    status: '', // posibble values: LOGGED_OUT, LOGGED_IN, LOADING, ERROR
    userDetail:{}, // current 
    authResponse: {
    }

  }
}
export default {
  state: {
    status: '', // posibble values: LOGGED_OUT, LOGGED_IN, LOADING, ERROR
    userDetail:{}, // current user
    authResponse: {
      challengeName:''
    }
  },
  
  getters: {
    userDetail(state){
      return state.userDetail
    },
    
    role(state){
      return state.userDetail.role
    },
  
    status(state) {
      return state.status; 
    },

    authResponse(state){
      return state.authResponse
    }
     
  },
    
  mutations: {
      
    setUserDetail(state, payload) {      
      state.userDetail = payload
    },
  
    setStatus(state, payload){
      state.status = payload
    },
  
    resetState(state){
      Object.assign(state, getDefaultState())
    },

    setAuthResponse(state, payload){
      state.authResponse = payload
    }
  },
  
  actions: {
    async signIn({commit, dispatch}, payload){

      let response = await signin(payload.username, payload.password);

      commit('setAuthResponse', response)

      dispatch('userDetail')

    },

    async completeNewPassword({commit, state}, payload){

      let response = await completeNewPassword(state.authResponse, payload.newPassword);

      commit('setAuthResponse', response)

    },

    async forgotPassword({commit}, payload){

      let response = await forgotPassword(payload.email);

      commit('setAuthResponse', response)

    },
    
    async forgotPasswordSubmit({commit}, payload){

      let response = await forgotPassword(payload.username, payload.code, payload.newPassword);

      commit('setAuthResponse', response)

    },

    async userDetail({commit}){

      let response = await currentAuthenticatedUser();
      commit('setUserDetail', response.attributes)
    },
    
    

    async signout({commit}){

      await signout()
      commit('setAuthResponse', {})

    }

  },

  
}