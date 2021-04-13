import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isShownNossaflex: true,
    isFullscreenNossaflex: false,
    isShownPhotos: false,
    isFullscreenPhotos: false,
    isShownStickies: false,
    isFullscreenStickies: false
  },
  mutations: {
    toggleShownNossaflex(state, shownBool) {
      state.isShownNossaflex = shownBool
    },
    toggleFullscreenNossaflex(state) {
      state.isFullscreenNossaflex = !state.isFullscreenNossaflex
    },
    toggleShownPhotos(state, shownBool) {
      state.isShownPhotos = shownBool
    },
    toggleFullscreenPhotos(state) {
      state.isFullscreenPhotos = !state.isFullscreenPhotos
    },
    toggleShownStickies(state, shownBool) {
      state.isShownStickies = shownBool
    },
    toggleFullscreenStickies(state) {
      state.isFullscreenStickies = !state.isFullscreenStickies
    }
  },
  actions: {
    
  },
  getters: {
    isShownNossaflex: state => {
      return state.isShownNossaflex
    },
    isFullscreenNossaflex: state => {
      return state.isFullscreenNossaflex
    },
    isShownPhotos: state => {
      return state.isShownPhotos
    },
    isFullscreenPhotos: state => {
      return state.isFullscreenPhotos
    },
    isShownStickies: state => {
      return state.isShownStickies
    },
    isFullscreenStickies: state => {
      return state.isFullscreenStickies
    },
  }
})