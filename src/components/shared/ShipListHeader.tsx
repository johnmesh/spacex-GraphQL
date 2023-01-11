import React from 'react'

export const ShipsListHeader = () => {
  return (
    <div className="grid grid-cols-6 shadow-pos-list py-4 w-full bg-blue-400 text-[#ffff] rounded-tr-md rounded-tl-md px-2">
      <div className="flex flex-col text-sm w-full">
        <h2 className="text=[#8d8d9a] font-semibold ">ID</h2>
      </div>
      <div className="flex flex-col text-sm w-full">
        <h2 className="text=[#8d8d9a] font-semibold ">Model</h2>
      </div>
      <div className="flex flex-col text-sm w-full">
        <h2 className="text=[#8d8d9a] font-semibold ">Name</h2>
      </div>
      <div className="flex flex-col text-sm w-full">
        <h2 className="text=[#8d8d9a] font-semibold ">Type</h2>
      </div>
      <div className="flex flex-col text-sm w-full">
        <h2 className="text=[#8d8d9a] font-semibold">Class</h2>
      </div>
      <div className="flex flex-col text-sm m-auto w-full">
        <h2 className="text=[#8d8d9a] font-semibold">Year Built</h2>
      </div>
    </div>
  )
}
