import { NextImage } from '@/components/NextImage'
import React from 'react'
import Oranogram from "@/public/Authorities/Oranogram/download.png"

function page() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-20 py-20">
            <h1 className="text-4xl font-semibold text-center">Oranogram</h1>
            <NextImage Src={Oranogram} ClassName={"w-11/12"} Alt={"Oranogram"} Loading={"lazy"} />
        </div>
    )
}

export default page