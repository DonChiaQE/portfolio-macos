import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    zIndex: 2,
    isShownNossaflex: true,
    isFullscreenNossaflex: false,
    isShownPhotos: false,
    isFullscreenPhotos: false,
    isShownStickies: false,
    isFullscreenStickies: false,
    activeWindow: 'Finder',
    notepadData: 'Why are you looking at this?'
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
    },
    zIndexIncrement(state, top) {
      console.log("zindex upgraded")
      state.zIndex += 1
      document.getElementById(top).style.zIndex = state.zIndex;
    },
    changeActiveWindow(state, window) {
      state.activeWindow = window;
    },
    updateNotepad(state, local) {
      state.notepadData = local;
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
    zIndex: state => {
      return state.zIndex
    },
    activeWindow: state => {
      return state.activeWindow
    },
    notepadData: state => {
      return state.notepadData
    }
  }
})