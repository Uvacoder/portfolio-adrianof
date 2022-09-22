import { defineStore } from 'pinia'

const state = () => ({
  isLoginModalOpen: false
})

// const getters = {}

const actions = {
  toggleLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen
  }
}

export const useGlobalStore = defineStore('globals', {
  state,
  actions
})
