import React from 'react'
import { ShipsListItem } from './ShipListItem'
import { Ships } from 'types/dataTypes'

export const ShipListBody = ({ ships }: { ships: Ships[] }) => {
  return (
    <div className="">
      {ships.map((ship, index) => (
        <ShipsListItem {...ship} key={index} />
      ))}
    </div>
  )
}
