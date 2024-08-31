import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ContactInfo() {
    return (
        <div className="flex flex-col w-full gap-10">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold tracking-tighter text-7xl lg:text-9xl">Let's Talk</h1>
                <p className="text-base xl:text-lg">We're Ready To Listen</p>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-lg font-bold tracking-tight xl:text-3xl">Contact Us :-</h1>
                <div className="flex flex-col gap-2 ml-3">
                    <Link href={"/"} className="flex items-center gap-2 text-sm font-medium transition-all duration-300 lg:text-base w-fit hover:text-blue-500">
                        <span><Phone size={18} color="#ff6347" /></span> +91 44 2363 5101
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2 text-sm font-medium transition-all duration-300 lg:text-base w-fit hover:text-blue-500">
                        <span><Mail size={18} color="#ff6347" /></span> principal@dgvaishnavcollege.edu.in
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2 text-sm font-medium transition-all duration-300 lg:text-base w-fit hover:text-blue-500">
                        <span><Mail size={18} color="#ff6347" /></span> coe@dgvaishnavcollege.edu.in
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2 text-sm font-medium transition-all duration-300 lg:text-base w-fit hover:text-blue-500">
                        <span><MapPin size={18} color="#ff6347" /></span> #833, E.V.R. Periyar High Road, Arumbakkam, Chennai – 600 106, Tamilnadu.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo