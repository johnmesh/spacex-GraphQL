export interface Rocket {
  name: string
  type: string
  company: string
  boosters: string
  country: string
  stages: number
  active: boolean
  cost_per_launch: number
  description: string
}

export interface LaunchRocket {
  rocket: Rocket
}

export interface LaunchSite {
  site_id: string
  site_name: string
  site_name_long: string
}

export interface LaunchLinks {
  article_link: string
  mission_patch: string
  reddit_campaign: string
  reddit_launch: string
  reddit_media: string
  reddit_recovery: string
  video_link: string
  wikipedia: string
}

export interface Ships {
  name: string
  model: string
  type: string
  class: string
  id: boolean
  year_built: number
}
export interface Launch {
  upcoming: boolean
  details: string
  is_tentative: boolean
  launch_date_local: string
  launch_year: string
  mission_name: string
  static_fire_date_utc: string
  tentative_max_precision: string
  launch_success: boolean
  rocket: LaunchRocket
  launch_site: LaunchSite
  links: LaunchLinks
  ships: Ships[]
}
