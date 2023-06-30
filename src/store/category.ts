import { defineStore } from 'pinia'

export const categoryStore = defineStore('category', {
  state: () => {
    return {
      couter: 0
    }
  },
  actions: {
    increment() {
      this.couter++
    },
    decrement() {
      this.couter--
    },
  },
  persist: {
    enabled: true,
  },
})
