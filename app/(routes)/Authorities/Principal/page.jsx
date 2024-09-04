import Image from 'next/image'
import React from 'react'
import Principal from "@/public/Members/Principal.jpg"
import Principal2 from "@/public/Members/Principal2.jpg"

function page() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen py-20">
            <div className="flex flex-col items-center justify-center w-11/12 gap-20">
                <Image src={Principal} fetchPriority="high" loading="lazy" quality={100} width={800} alt="Principal" className="rounded-md" />
                <Image src={Principal2} fetchPriority="high" loading="lazy" quality={100} width={800} alt="Principal" className="rounded-md" />

                <h1 className="text-xl font-bold lg:text-2xl">Dr. S. Santhosh Baboo, M.Sc. Ph.D., <span className="font-normal">Principal</span></h1>
                <div className="flex flex-col gap-10 max-w-7xl">
                    <p className="text-sm md:text-base">Greetings! <br /> The meaning of education has transformed greatly in today’s technology driven and digitally connected world that we live in. An educator in the present times has to adopt a multi-dimensional approach having knowledge creation, confidence building and honing leadership skills at its core. While many of our students have been greatly contributing to various renowned and reputed organisations as exemplar leaders, the institution also focuses on developing entrepreneurship skills among students so that they would have the courage and conviction to establish an enterprise and create a legacy.</p>
                    <p className="text-sm md:text-base"> In the sphere of research, understanding the complexities of the various issues, exploring new avenues and contributing to development of knowledge has been our priority. Having carved a niche for itself over the year, through its myriad achievements, this institution today stands as a symbol of immense possibilities and innumerable opportunities. The task ahead is clearly defined-educate, enlighten and empower. As Benjamin Franklin said, “An investment in knowledge pays the best interest”.</p>
                    <p className="text-sm md:text-base">“ஒழுக்கம் விழுப்பந் தரலான் ஒழுக்கம் <br />
                        உயிரினும் ஓம்பப் படும் “</p>
                </div>
            </div>
        </div>
    )
}

export default page