import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isShown: false,
    isFullscreen: false,
  },
  mutations: {
    toggleShown(state, shownBool) {
      state.isShown = shownBool
    },
    toggleFullscreen(state) {
      state.isFullscreen = !state.isFullscreen
      console.log(state.isFullscreen)
    }
  },
  actions: {
    
  },
  getters: {
    // isShown: state => state.isShown,
    // isFullscreen: state => state.isFullscreen,
    isShown: state => {
      return state.isShown
    },
    isFullscreen: state => {
      return state.isFullscreen
    },
  }
})