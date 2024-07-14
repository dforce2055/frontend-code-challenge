import type { GetActivitiesParams, Activity, ActivityWithDetails } from '../types'
import { getActivitiesObject } from '../utils'

const path = 'https://www.frontchallenge.bigbox.com.ar/activity'

export const fetchResults = async (): Promise<Activity[]> => {
  try {
    const response = await fetch(path, {
      method: 'GET',
      cache: 'force-cache'
    })

    const activities: Activity[] = await response.json()

    return activities
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getActivities = async ({
  page = 1,
  limit = 9
}: GetActivitiesParams): Promise<ActivityWithDetails[]> => {
  try {
    const response = await fetch(`${path}?_page=${page}&_limit=${limit}`)

    const activities: Activity[] = await response.json()
    const activitiesDecorator: ActivityWithDetails[] = activities.map((item) => {
      return {
        ...item,
        activity: getActivitiesObject(item.activity)
      }
    })

    return activitiesDecorator
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getActivity = async (id: string) => {
  try {
    if (!id) throw new Error('No ID provided')

    const response = await fetch(`${path}/${id}`)

    const activity: Activity = await response.json()
    const activityDecorator: ActivityWithDetails = {
      ...activity,
      activity: getActivitiesObject(activity.activity)
    }

    return activityDecorator
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getRelatedActivitiesByCategory = async (category: string, limit = 10) => {
  try {
    if (!category) throw new Error('No category provided')

    const randomPage = Math.floor(Math.random() * 10) + 1
    const activities = await getActivities({ page: randomPage, limit: 50 })

    const relatedActivity = activities.filter((activity) => activity.activity.category === category)

    return relatedActivity.slice(0, limit)
  } catch (error: any) {
    throw new Error(error)
  }
}
