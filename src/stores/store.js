import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: true,
    userLogged: null,
    currentCompany: null
  },
  mutations: {
    toggleMenu(state, isVisible) {
      if (!state.user) {
        return state.isMenuVisible = false
      }
        
      state.isMenuVisible = isVisible === undefined ? !state.isMenuVisible : isVisible
    },

    setUserLogged(state, user) {
      state.userLogged = user
      if (user) {
        axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
        //state.isMenuVisible = true
      }
      else {
        delete axios.defaults.headers.common['Authorization']
        //state.isMenuVisible = false
      }
    }
  },
  actions: {

  }
})
