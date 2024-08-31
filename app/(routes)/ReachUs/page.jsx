import React from 'react'
import GoogleMap from './components/GoogleMap'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

function page() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 py-14">

            <div className="flex flex-col justify-between w-11/12 gap-20 2xl:flex-row">
                {/* Contact Info */}
                <ContactInfo />

                {/* Contact Form */}
                <ContactForm />
            </div>

            {/* Google Map */}
            <GoogleMap />
        </div>
    )
}

export default page