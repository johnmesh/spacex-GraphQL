import React from 'react'
import { Ships } from 'types/dataTypes'

export const ShipsListItem = ({
  id,
  model,
  name,
  type,
  year_built,
  ...props
}: Ships) => {
  return (
    <div className="grid grid-cols-6 px-1 py-4 border-b border-l border-r border-gray-200 w-full text-gray-400 text-sm">
      <div className="w-full">
        <div className="ml-4 m-auto">{id}</div>
      </div>
      <div className="m-auto w-full">{model ? model : '--'}</div>
      <div className="m-auto w-full">{name ? name : '--'}</div>
      <div className="m-auto w-full">{type ? type : '--'}</div>
      <div className="m-auto w-full">{props.class ? props.class : '--'}</div>
      <div className="m-auto w-full">{year_built ? year_built : '--'}</div>
      <div></div>
    </div>
  )
}
