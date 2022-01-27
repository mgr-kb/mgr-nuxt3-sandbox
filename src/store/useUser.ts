import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: (): { user: UserData } => {
    return {
      user: {
        id: 1,
        name: 'mgr',
        age: 30,
        gender: 'man',
      }
    }
  },
  getters: {
    getUser(): UserData {
      return this.user
    }
  },
  actions: {
    setUser(userData: UserData) {
      this.user = userData
    },
    birthday() {
      this.user.age += 1
    }
  },
})