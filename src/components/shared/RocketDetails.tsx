import React from 'react'
import { ListItem } from './ListItem'
import { CardBody } from './CardBody'
import { CardHeader } from './CardHeader'
import { useDataContext } from 'hooks/useDataProvider'
import { Rocket } from 'types/dataTypes'

export const RocketDetails = ({
  name,
  cost_per_launch,
  company,
  boosters,
  active,
  type,
  stages,
  description,
  country,
}: Rocket) => {
  return (
    <div className="w-2/4 h-60">
      <CardHeader title="Rocket Details" />
      <CardBody>
        <ListItem label="Name" text={name ? name : '--'} />
        <ListItem label="Type" text={type ? type : '--'} />
        <ListItem label="Country" text={country ? country : '--'} />
        <ListItem label="Company" text={company ? company : '--'} />
        <ListItem
          label="CostPerLaunch"
          text={cost_per_launch ? cost_per_launch : '--'}
        />
        <ListItem label="active" text={active ? `${active}` : '--'} />
        <ListItem label="Stages" text={stages ? stages : '--'} />
        <ListItem label="Boosters" text={boosters ? boosters : '--'} />
        <div className='"flex flex-col text-sm mt-2 '>
          <span className="text-gray-400">Description:</span>
          <textarea
            id="details"
            rows={6}
            className="w-full  border-[1px] rounded mt-1"
            disabled
            style={{ resize: 'none' }}
            value={description}
          />
        </div>
      </CardBody>
    </div>
  )
}
