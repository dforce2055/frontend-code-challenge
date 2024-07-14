export interface GetActivitiesParams {
  page?: number
  limit?: number
}

export interface Activity {
  proxylogicaldeletemodel_ptr_id: number
  title: string
  id: number
  points: number
  bigbox_points: number
  activity: string
  visible: boolean
  participants: number
  price: number
  order: number
  biglife_instance_id: number
  activity_type: string
}

export interface ActivityWithDetails extends Omit<Activity, 'activity'> {
  activity: ActivityDetails
}

export interface ActivityDetails {
  category: string
  rating: number
  subtitle: string
  description: string
  title: string
  image: string[]
  know_what: string
  tip: string
  locations: Location[]
  market_price: number
  activity_hash: string
  partner: string
  participants: number
  is_remote: boolean
  benefits: string
  activity_type: string
  show_new: boolean
  id: number
  small_print: string
  name: string
}

export interface Location {
  province: string
  phone: string
  delivery_in_all_country: boolean
  address: string
  lat: string
  lng: string
}
export interface Benefits {}
