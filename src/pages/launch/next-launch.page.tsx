import React from 'react'
import NextLaunchView from 'components/NextLaunchView'
import Rocket from '/public/images/rocket.svg'
import ArrowLeft from '/public/images/arrow-left.svg'
import Link from 'next/link'

export default function LastLaunchPage() {
  return (
    <div className="pb-16">
      <div className="bg-[#0f4a75] h-72 ">
        <Link href="/launch/home">
          <ArrowLeft
            className="self-start ml-4 cursor-pointer"
            height={65}
            widtth={65}
          />
        </Link>

        <div className="text-[#ffff] text-7xl font-bold flex m-auto items-center justify-center ">
          <Rocket height={115} width={115} className="m-0" />
          <span className="ml-6">NEXT ROCKET LAUNCH</span>
        </div>
      </div>

      <NextLaunchView />
    </div>
  )
}
