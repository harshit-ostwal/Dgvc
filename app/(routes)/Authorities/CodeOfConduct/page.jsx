import React from 'react'
import CodeOfConduct from './components/CodeOfConduct'

function page() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 py-20">
            <h1 className="items-center text-4xl font-semibold text-center">Code Of Conduct</h1>
            <CodeOfConduct />
        </div>
    )
}

export default page