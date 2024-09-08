import { ProfessionalData } from '@/data/(routes)/Departments/Professional'
import Link from 'next/link'
import React from 'react'

function Professional() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-20 py-20">
            <h1 className="text-4xl font-semibold text-center">Professionals</h1>

            <div className="grid w-11/12 grid-cols-1 gap-10 lg:w-3/4 md:grid-cols-2 xl:grid-cols-3">
                {ProfessionalData.map((data, index) => (
                    <Link key={index} href={data.href} className="flex flex-col w-full gap-4 p-4 font-semibold duration-500 border-2 rounded-lg hover:border-black hover:scale-105"><span className="p-4 rounded-lg bg-gradient-to-tr from-green-100 to-yellow-100 w-fit">{data.icon}</span> {data.title}</Link>
                ))}
            </div>
        </div>
    )
}

export default Professional 