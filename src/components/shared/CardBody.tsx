import React from 'react'

export const CardBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-[1px] h-84 rounded-br-md rounded-bl-md bg-[#ffff] drop-shadow-lg p-2">
      {children}
    </div>
  )
}
