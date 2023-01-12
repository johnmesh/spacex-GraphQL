import React from 'react'
import { ListItem } from './ListItem'
import { CardBody } from './CardBody'
import { CardHeader } from './CardHeader'

type GeneralDetailsProps = {
  mission_name: string
  launch_date_local: string
  launch_year: string
  static_fire_date_utc: string
  tentative_max_precision: string
  launch_success: boolean
  details: string
}
export const GeneralDetails = ({
  mission_name = '',
  launch_date_local = '',
  launch_year = '',
  static_fire_date_utc = '',
  tentative_max_precision = '',
  launch_success = false,
  details = '',
}: GeneralDetailsProps) => {
  return (
    <div className="w-2/4 h-60">
      <CardHeader title="General Details" />
      <CardBody>
        <ListItem
          label="MissionName"
          text={mission_name ? mission_name : '--'}
          id="missionName"
        />
        <ListItem
          label="LaunchDate"
          text={launch_date_local ? launch_date_local : '--'}
          id="launchDate"
        />
        <ListItem
          label="LaunchYear"
          text={launch_year ? launch_year : '--'}
          id="launchYear"
        />
        <ListItem
          label="StaticFireDate"
          text={static_fire_date_utc ? static_fire_date_utc : '--'}
          id="staticFireDate"
        />
        <ListItem
          label="TentativeMaxPrecision"
          text={tentative_max_precision ? tentative_max_precision : '--'}
          id="tentativeMaxPrecision"
        />
        <ListItem
          label="LaunchSuccess"
          text={launch_success ? `${launch_success}` : '--'}
          id="launchSuccess"
        />
        <div className='"flex flex-col text-sm mt-2 '>
          <span className="text-gray-400">Details:</span>
          <textarea
            data-testid="details"
            rows={6}
            className="w-full  border-[1px] rounded mt-1"
            disabled
            value={details ?? ''}
            style={{ resize: 'none' }}
          />
        </div>
      </CardBody>
    </div>
  )
}
