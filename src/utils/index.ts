import type { ActivityDetails } from '../types'

export const convertStringToObject = (str: string) => {
  if (!str) return {}
  try {
    return JSON.parse(str)
  } catch (error) {
    console.error('Error parsing string to object', error)
    return {}
  }
}

export const getActivitiesObject = (activity: string): ActivityDetails => {
  const activityObject = convertStringToObject(activity)
  return activityObject as ActivityDetails
}

export const isAnImage = (url?: string) => {
  if (!url) return false

  if (
    url?.endsWith('.png') ||
    url?.endsWith('.jpg') ||
    url?.endsWith('.jpeg') ||
    url?.endsWith('.gif') ||
    url?.endsWith('.webp') ||
    url?.endsWith('.svg')
  ) {
    return true
  }

  return false
}

export const scrollTop = () => {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
