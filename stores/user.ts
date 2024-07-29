import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    user: undefined
  }),
  actions: {},
  getters: {
    isAuthenticated: (state) => !!state.user
  }
})
