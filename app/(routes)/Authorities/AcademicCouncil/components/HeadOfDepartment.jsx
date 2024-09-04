import Image from 'next/image'
import Logo from "@/public/Logo/Logo.png"
import React from 'react'
import { HeadOfDepartmentsData } from '@/data/(routes)/Authorities/AcademicCouncil'

function HeadOfDepartments() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-40">
      <h1 className="text-4xl font-semibold lg:text-6xl">Head Of Departments</h1>

      <div className="grid items-center justify-center w-3/4 grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {HeadOfDepartmentsData.map((data, index) => (
          <div key={index} className="flex flex-col gap-10 p-5 border rounded-md">
            <Image src={data.profileImg ? data.profileImg : Logo} fetchPriority="high" loading="lazy" quality={100} alt={data.title} className="object-cover object-center w-full rounded-md aspect-square" />

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

export default HeadOfDepartments