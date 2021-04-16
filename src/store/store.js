import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // Active window 
    activeWindow: 'Finder',
    // Z-index counter
    zIndex: 2,
    // Nossaflex window
    isShownNossaflex: true,
    isFullscreenNossaflex: false,
    // Photo window
    isShownPhotos: false,
    isFullscreenPhotos: false,
    // Stickies window
    isShownStickies: false,
    isFullscreenStickies: false,
    notepadData: 'Why are you looking at this?',
    // Mail window
    isShownMail: false,
    isFullscreenMail: false,
    mailContent: 'hhh',
    mailSubject: 'New Message'
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
      document.getElementById(top).style.zIndex = state.zIndex
    },
    changeActiveWindow(state, window) {
      state.activeWindow = window
    },
    updateNotepad(state, local) {
      state.notepadData = local
    },
    toggleShownMail(state, shownBool) {
      state.isShownMail = shownBool
    },
    toggleFullscreenMail(state) {
      state.isFullscreenMail = !state.isFullscreenMail
    },
    updateMail(state, local) {
      state.isShownMail = local
    },
    updateMailSubject(state, local) {
      state.mailSubject = local
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
    },
    isShownMail: state => {
      return state.isShownMail
    },
    isFullscreenMail: state => {
      return state.isFullscreenMail
    },
    mailContent: state => {
      return state.mailContent
    },
    mailSubject: state => {
      return state.mailSubject
    }
  }
})