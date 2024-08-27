import { BannerLeftData, BannerRightData } from '@/data/Navbar/Banner'
import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className="items-center justify-between hidden p-3 lg:flex">
      <div className="flex gap-5">
        {BannerLeftData.map((data, index) => (
          <Link key={index} href={data.href} className="flex items-center justify-center gap-2 font-semibold hover:text-rose-500"><span>{data.icon}</span>{data.title}</Link>
        ))}
      </div>
      <div className="flex gap-5">
        {BannerRightData.map((data, index) => (
          <Link key={index} href={data.href} className="flex items-center justify-center gap-2 font-semibold hover:text-rose-500"><span>{data.icon}</span>{data.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default Banner