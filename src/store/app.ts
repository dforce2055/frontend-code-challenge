import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    activitiesTotal: 0
  }),
  actions: {
    setActivitiesTotal(total: number) {
      this.activitiesTotal = total
    }
  }
})
