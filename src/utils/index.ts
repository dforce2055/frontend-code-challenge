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
