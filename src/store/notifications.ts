import { defineStore } from 'pinia'
import { NotificationType } from '../types'

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    showNotification: false,
    notificationType: NotificationType.success,
    title: '',
    description: ''
  }),
  actions: {
    hideNotification() {
      this.showNotification = false
      this.title = ''
      this.description = ''
    },
    setNotification({
      notificationType,
      title,
      description
    }: {
      notificationType: NotificationType
      title: string
      description: string
    }) {
      this.notificationType = notificationType
      this.title = title
      this.description = description
      this.showNotification = true
    },
    setErrorNotification(title?: string, description?: string) {
      this.setNotification({
        notificationType: NotificationType.error,
        title: title ?? 'Error fetching data!',
        description: description ?? 'Something went wrong, please try again.'
      })
    },
    setSuccessNotification(title?: string, description?: string) {
      this.setNotification({
        notificationType: NotificationType.success,
        title: title ?? 'Success!',
        description: description ?? 'Great everything is working fine.'
      })
    }
  }
})
