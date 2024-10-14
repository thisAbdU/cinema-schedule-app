import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAdmin: false,
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    setAdminStatus(isAdmin) {
      this.isAdmin = isAdmin
    },
    logout() {
      this.user = null
      this.isAdmin = false
    }
  }
})