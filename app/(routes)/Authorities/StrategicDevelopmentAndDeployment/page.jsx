import React from 'react'
import SDD1 from "@/public/Authorities/StrategicDevelopmentAndDeployment/download (1).png"
import SDD2 from "@/public/Authorities/StrategicDevelopmentAndDeployment/download (2).png"
import SDD3 from "@/public/Authorities/StrategicDevelopmentAndDeployment/download (3).png"
import SDD4 from "@/public/Authorities/StrategicDevelopmentAndDeployment/download (4).png"
import SDD5 from "@/public/Authorities/StrategicDevelopmentAndDeployment/download (5).png"
import SDD6 from "@/public/Authorities/StrategicDevelopmentAndDeployment/download (6).png"
import SDD7 from "@/public/Authorities/StrategicDevelopmentAndDeployment/download (7).png"
import SDD8 from "@/public/Authorities/StrategicDevelopmentAndDeployment/download (8).png"
import SDD9 from "@/public/Authorities/StrategicDevelopmentAndDeployment/download (9).png"
import { NextImage } from '@/components/NextImage'

const images = [SDD1, SDD2, SDD3, SDD4, SDD5, SDD6, SDD7, SDD8, SDD9]

function Page() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 py-20">
            <h1 className="text-4xl font-semibold text-center">Strategic Development & Deployment</h1>
            <div className="grid w-11/12 grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                {images.map((data, index) => (
                    <NextImage Src={data} key={index} Loading={"lazy"} Alt={"Strategic Development & Deployment"} />
                ))}
            </div>
        </div>
    )
}

export default Page