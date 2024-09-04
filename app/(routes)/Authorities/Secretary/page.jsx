import Image from 'next/image'
import React from 'react'
import Secretary from "@/public/Members/Secretary.jpg"
import Secretary2 from "@/public/Members/Secretary2.jpg"

function page() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen py-20">
            <div className="flex flex-col items-center justify-center w-11/12 gap-20">
                <Image src={Secretary} fetchPriority="high" loading="lazy" quality={100} width={800} alt="Secretary" className="rounded-md" />
                <Image src={Secretary2} fetchPriority="high" loading="lazy" quality={100} width={800} alt="Secretary" className="rounded-md" />

                <h1 className="text-xl font-bold lg:text-2xl">Shri. Ashok Kumar Mundhra, <span className="font-normal">Secretary</span></h1>
                <div className="flex flex-col gap-10 max-w-7xl">
                    <p className="text-sm md:text-base">“All our dreams can come true, if we have the courage to pursue them”— Walt Disney </p>
                    <p className="text-sm md:text-base">Dreams may seem to be far removed from reality. They may seem impossible and improbable. But little do we realize that all of us have in us the strength, patience and the passion to fulfil our dreams. The vision and dreams of a few kind hearted philanthropists and educationists, led to the founding of this institution. <br /> <br /> The hard work and perseverance of the successive members of the management and the academicians have enabled the institution emerge as one of the much sought after colleges in the city. It is now our duty and responsibility to carry forward this dream and with steadfast faith and determination redefine the standard of excellence, strengthen the spirit of solidarity and celebrate the power of knowledge to transform the society.</p>
                    <p className="text-sm md:text-base">With Best Wishes</p>
                </div>
            </div>
        </div>
    )
}

export default page