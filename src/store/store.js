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
    isShownNossaflex: false,
    isFullscreenNossaflex: false,
    // Photo window
    isShownPhotos: false,
    isFullscreenPhotos: false,
    // Bio window
    isShownBio: false,
    isFullscreenBio: false,
    // Stickies window
    isShownStickies: false,
    isFullscreenStickies: false,
    notepadData: 'Why are you looking at this?',
    // Mail window
    isShownMail: false,
    isFullscreenMail: false,
    mailContent: 'hhh',
    mailSender: '',
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
    toggleShownBio(state, shownBool) {
      state.isShownBio = shownBool
    },
    toggleFullscreenBio(state) {
      state.isFullscreenBio = !state.isFullscreenBio
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
    },
    updateMailSender(state, local) {
      state.mailSender = local
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
    isShownBio: state => {
      return state.isShownBio
    },
    isFullscreenBio: state => {
      return state.isFullscreenBio
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
    },
    mailSender: state => {
      return state.mailSender
    }
  }
})