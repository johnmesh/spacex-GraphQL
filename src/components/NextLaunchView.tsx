import React from 'react'
import { useDataContext } from 'hooks/useDataProvider'
import { RocketDetails } from './shared/RocketDetails'
import { LaunchSiteDetails } from './shared/LaunchSiteDetails'
import { LaunchLinks } from './shared/Links'
import { ShipsListHeader } from './shared/ShipListHeader'
import { ShipListBody } from './shared/ShipListBody'
import { GeneralDetails } from './shared/GeneralDetails'

export default function LastLaunchView() {
  const { loading, launchNext } = useDataContext()
  console.log('launchNext==>', launchNext)
  return (
    <div className="p-2 w-3/5 m-auto">
      <div className="flex mt-10 gap-8 h-fit h-96">
        <GeneralDetails
          mission_name={launchNext?.mission_name}
          launch_date_local={launchNext?.launch_date_local}
          launch_year={launchNext?.launch_year}
          static_fire_date_utc={launchNext?.static_fire_date_utc}
          tentative_max_precision={launchNext?.tentative_max_precision}
          launch_success={launchNext?.launch_success}
          details={launchNext?.details}
        />
        <RocketDetails {...launchNext?.rocket?.rocket} />
      </div>

      <div className="flex justify-between mt-10 gap-8 mt-28 h-fit">
        <LaunchSiteDetails {...launchNext?.launch_site} />
        <LaunchLinks {...launchNext?.links} />
      </div>
      {launchNext?.ships.length > 0 && (
        <div className="mt-16 w-full drop-shadow-lg">
          <ShipsListHeader />
          <ShipListBody ships={launchNext?.ships} />
        </div>
      )}
    </div>
  )
}
