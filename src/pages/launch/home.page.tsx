import React from 'react'
import Link from 'next/link'
import Spinner from '/public/Spinner.svg'
import Home from '/public/images/home.svg'
import { useDataContext } from 'hooks/useDataProvider'
import moment from 'moment'

export default function LastLaunchPage() {
  const { loading, launchNext, launchLatest } = useDataContext()

  const isLoading =
    !launchLatest?.launch_date_local && !launchNext?.launch_date_local
  return (
    <div className="pb-16">
      <div className="bg-[#0f4a75] h-72 flex m-auto items-center">
        <div className="text-[#ffff] text-7xl font-bold flex m-auto items-center justify-center ">
          <Home height={115} width={115} className="m-0" />
          <span className="ml-6">HOME</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="mt-8 w-96 flex justify-between">
              <span className="cursor-pointer text-[#42A5F5] uppercase">
                <Link href="/launch/last-launch">Last Rocket Launch</Link>
              </span>
              <span>
                {moment(launchLatest?.launch_date_local).format('MM-DD-YYYY')}
              </span>
            </div>

            <div className="mt-8 w-96 flex justify-between uppercase">
              <span className="cursor-pointer text-[#42A5F5]">
                <Link href="/launch/next-launch"> Next Rocket Launch</Link>
              </span>
              <span>
                {moment(launchNext?.launch_date_local).format('MM-DD-YYYY')}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
