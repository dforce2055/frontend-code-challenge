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
export const getActivity = async (id: string) => {}
