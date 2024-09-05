import React from 'react'

function Page() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 py-20">
            <h1 className="text-4xl font-semibold text-center">Strategic Development & Deployment</h1>
            <iframe src="/Authorities/StrategicDevelopmentAndDeployment/download.pdf" width={735} className="min-h-screen" />
        </div>
    )
}

export default Page