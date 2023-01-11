import React from "react"

export const CardHeader = ({ title }: { title: string }) => {
    return (
      <div className="bg-blue-400 h-10 rounded-tr-md rounded-tl-md pl-2 flex items-center text-[#ffff]">
        {title}
      </div>
    )
  }