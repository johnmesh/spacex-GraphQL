import React from 'react'
import {
  useDataContext,
  useLastRocketLaunchQuery,
  LastLaunchDataDocument,
} from 'hooks/useDataProvider'
import { Launch } from '../types/dataTypes'
import { useQuery } from '@apollo/client'
import { GeneralDetails } from './shared/GeneralDetails'
import { RocketDetails } from './shared/RocketDetails'
import { LaunchSiteDetails } from './shared/LaunchSiteDetails'
import { LaunchLinks } from './shared/Links'
import { ShipsListHeader } from './shared/ShipListHeader'
import { ShipListBody } from './shared/ShipListBody'

export default function LastLaunchView() {
  const { launchLatest } = useDataContext()

  return (
    <div className="p-2 w-3/5 m-auto">
      <div className="flex mt-10 gap-8 h-fit h-96">
        <GeneralDetails
          mission_name={launchLatest?.mission_name}
          launch_date_local={launchLatest?.launch_date_local}
          launch_year={launchLatest?.launch_year}
          static_fire_date_utc={launchLatest?.static_fire_date_utc}
          tentative_max_precision={launchLatest?.tentative_max_precision}
          launch_success={launchLatest?.launch_success}
          details={launchLatest?.details}
        />
        <RocketDetails {...launchLatest?.rocket?.rocket} />
      </div>

      <div className="flex justify-between mt-10 gap-8 mt-28 h-fit">
        <LaunchSiteDetails {...launchLatest?.launch_site} />
        <LaunchLinks {...launchLatest?.links} />
      </div>
      {launchLatest?.ships.length > 0 && (
        <div className="mt-16 w-full drop-shadow-lg">
          <ShipsListHeader />
          <ShipListBody ships={launchLatest?.ships} />
        </div>
      )}
    </div>
  )
}
