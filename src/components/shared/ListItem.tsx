import React from 'react'
import NewTab from '/public/images/new-tab.svg'

type ListItemProps = {
  label: string
  text?: string | number
  link?: string
}
export const ListItem = ({ label, text, link }: ListItemProps) => {
  return (
    <div className="flex justify-between text-sm mt-2">
      <span className="text-gray-400 ">{label}</span>
      {link ? (
        <a href={link} target="_blank">
          <NewTab height={15} width={15} />
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  )
}
