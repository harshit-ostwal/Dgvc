import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import React from 'react'

function ContactForm() {
    return (
        <form className="flex flex-col items-center justify-center w-full gap-6">
            <div className="flex flex-col gap-5 lg:flex-row">
                <Input placeholder={"ABC"} labelValue={"Full Name"} type={"text"} required={true} />
                <Input placeholder={"+91 00000 00000"} labelValue={"Mobile No"} type={"text"} required={true} />
            </div>
            <div className="flex flex-col gap-5 lg:flex-row">
                <Input placeholder={"name@example.com"} labelValue={"Mobile No"} type={"text"} required={true} />
                <Input placeholder={"Subject"} labelValue={"Subject"} required={true} />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor={"message"} className="text-sm font-medium text-primary-color">Message</label>
                <textarea id="message" placeholder="Type Your Message..." className="text-color outline outline-1 outline-neutral-400 p-2 md:p-3 rounded-md w-[320px] sm:w-[450px] lg:w-[920px] min-h-[100px]" required={true} />
            </div>
            <Button>Submit</Button>
        </form>
    )
}

export default ContactForm