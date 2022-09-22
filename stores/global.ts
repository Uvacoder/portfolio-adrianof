import { defineStore } from 'pinia'

const state = () => ({
  message: 'Hello'
})

// const getters = {}

const actions = {
  changeMessage(message: string) {
    this.message = message
  }
}

export const useTestStore = defineStore('test', {
  state,
  actions
})
