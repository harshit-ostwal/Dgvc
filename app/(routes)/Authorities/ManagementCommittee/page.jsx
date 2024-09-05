import { ManagementCommittee } from '@/data/(routes)/Authorities/ManagamentCommittee'
import Logo from "@/public/Logo/Logo.png"
import React from 'react'
import { NextImage } from '@/components/NextImage'

function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 py-20">
      <h1 className="text-4xl font-semibold text-center">Management Committee</h1>

      <div className="grid items-center justify-center w-11/12 grid-cols-1 gap-10 lg:w-3/4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

        {ManagementCommittee.map((data, index) => (
          <div key={index} className="flex flex-col gap-10 p-5 border rounded-md">
            <NextImage Src={data.profileImg ? data.profileImg : Logo} Loading="lazy" Alt={data.title} ClassName="object-cover object-center w-full rounded-md aspect-square" />

            <div className="flex flex-col gap-1">
              <h1 className="font-semibold truncate">{data.title}</h1>
              <p className="text-sm truncate">{data.role}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default page