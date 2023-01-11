import React from 'react'
import { ListItem } from './ListItem'
import { CardBody } from './CardBody'
import { CardHeader } from './CardHeader'

type LaunchSiteProps = {
  site_id: string
  site_name: string
  site_name_long: string
}
export const LaunchSiteDetails = ({
  site_id,
  site_name,
  site_name_long,
}: LaunchSiteProps) => {
  return (
    <div className="w-2/4 h-60">
      <CardHeader title="LaunchSite Details" />
      <CardBody>
        <ListItem label="SiteID" text={site_id ? site_id : '--'} />
        <ListItem label="SiteName" text={site_name ? site_name : '--'} />

        <div className='"flex flex-col text-sm mt-2 '>
          <span className="text-gray-400">SiteNameLong:</span>
          <textarea
            id="details"
            rows={6}
            className="w-full  border-[1px] rounded mt-1"
            disabled
            style={{ resize: 'none' }}
            value={site_name_long}
          />
        </div>
      </CardBody>
    </div>
  )
}
