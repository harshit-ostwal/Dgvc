import React from 'react'
import AcademicCouncil from './components/AcademicCouncil'
import ExternalExperts from './components/ExternalExperts'
import HeadOfDepartment from './components/HeadOfDepartment'

function page() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen py-20">
            <div className="flex flex-col items-center justify-center gap-20">

                <p className="w-11/12 lg:text-lg">The College has been conferred the status of “AUTONOMY” by the UGC and endorsed by the University of Madras from the academic year 2009 – 2010. The academic year 2015-16 witnessed the extension of autonomy being granted by the UGC for a period of 7 years from 2014-2021. The composition of the academic council is as below:</p>

                {/* Academic Council */}
                <AcademicCouncil />

                {/* External Experts */}
                <ExternalExperts />

                {/* Heads of the Departments */}
                <HeadOfDepartment />

            </div>
        </div>
    )
}

export default page