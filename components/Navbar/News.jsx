import { NewsData } from '@/data/Navbar/News';
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

function News() {

  const todayDate = new Date().toISOString().substring(0, 10);

  return (
    <div className="flex w-full p-2 bg-gradient-to-tr from-amber-200 via-green-200 to-blue-200">
      <h1 className="p-3 font-bold leading-none text-white rounded-lg bg-neutral-800 sm:text-sm md:text-base shrink-0">Latest Updates</h1>
      <Marquee loop={0} delay={0} speed={20}>
        {NewsData.filter(data => todayDate <= data.expirydate).map((data, index) => (
          <div key={index} className="grid grid-cols-2 gap-14 md:gap-24 lg:gap-40">
            <Link href={data.href} className="flex items-center gap-3 text-sm font-semibold capitalize transition-colors hover:text-red-500 md:text-base w-fit lg:text-lg">
              <span>{data.icon}</span>
              {data.news}
            </Link>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default News