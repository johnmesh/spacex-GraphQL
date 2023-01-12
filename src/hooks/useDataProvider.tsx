import React, { useContext } from 'react'
import { Launch } from '../types/dataTypes'
import { gql, useQuery } from '@apollo/client'

export type LastLaunchInfoQuery = {
  launchLatest: Launch
}

export type NextLaunchInfoQuery = {
  launchNext: Launch
}

export const NextLaunchDateDocument = gql`
  query NextRocketLaunch {
    launchNext {
      id
      upcoming
      launch_success
      details
      is_tentative
      launch_date_local
      launch_year
      links {
        article_link
        flickr_images
        mission_patch
        mission_patch_small
        presskit
        reddit_campaign
        reddit_launch
        reddit_media
        reddit_recovery
        video_link
        wikipedia
      }
      mission_name
      static_fire_date_utc
      tentative_max_precision
      rocket {
        rocket {
          name
          active
          boosters
          company
          cost_per_launch
          country
          stages
          type
          description
        }
      }
      launch_site {
        site_id
        site_name
        site_name_long
      }
      ships {
        id
        model
        name
        type
        class
        year_built
      }
    }
  }
`

export const LastLaunchDataDocument = gql`
  query LastRocketLaunch {
    launchLatest {
      id
      upcoming
      launch_success
      details
      is_tentative
      launch_date_local
      launch_year
      links {
        article_link
        flickr_images
        mission_patch
        mission_patch_small
        presskit
        reddit_campaign
        reddit_launch
        reddit_media
        reddit_recovery
        video_link
        wikipedia
      }

      rocket {
        rocket {
          name
          active
          boosters
          company
          cost_per_launch
          country
          stages
          type
          description
        }
      }

      mission_name
      static_fire_date_utc
      tentative_max_precision
      launch_site {
        site_id
        site_name
        site_name_long
      }
      ships {
        id
        model
        name
        type
        class
        year_built
      }
    }
  }
`
const AppDataContext = React.createContext<AppContextType>({} as AppContextType)

export interface AppContextType {
  loading: boolean
  launchLatest: Launch
  launchNext: Launch
}
export const DataProvider: React.FC = ({ children }) => {
  const { data: launchLatestRes } = useLastRocketLaunchQuery()
  const { data: launchNextRes } = useNextRocketlaunchQuery()

  return (
    <AppDataContext.Provider
      value={{
        loading: false,
        launchLatest: launchLatestRes?.launchLatest as Launch,
        launchNext: launchNextRes?.launchNext as Launch,
      }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

export const useLastRocketLaunchQuery = () =>
  useQuery<LastLaunchInfoQuery>(LastLaunchDataDocument)

const useNextRocketlaunchQuery = () =>
  useQuery<NextLaunchInfoQuery>(NextLaunchDateDocument)

export const useDataContext = () => useContext(AppDataContext)
