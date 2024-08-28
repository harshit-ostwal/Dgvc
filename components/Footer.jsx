import React from 'react'
import Logo from '@/public/Logo/Logo.png'
import Image from 'next/image'
import { Input } from './Input'
import { Button } from './Button'
import { Separator } from './ui/separator'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
import { FooterLinks } from '@/data/FooterLinks'

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center w-full gap-10 p-5 md:px-10">

      {/* Top */}
      <div className="flex flex-col items-center justify-between w-full gap-14 xl:flex-row">

        {/* Left Side */}
        <div className="flex flex-col items-center justify-center gap-4 xl:flex-row">

          {/* Logo */}
          <Image src={Logo} width={160} quality={100} loading="lazy" fetchPriority="high" alt="Dg Vaishnav College" />

          <div className="flex flex-col gap-1 text-center xl:text-start">
            <h1 className="text-2xl font-bold">We Are Socailly</h1>
            <p className="text-sm font-medium md:text-base">Empowering Minds, Enriching Lives: The College of Infinite Possibilities.</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold md:text-2xl">Subscribe To Our Newsletter</h1>
            <p className="text-sm font-medium md:text-base">The latest news, articles, and resources, sent to your inbox weekly.</p>
          </div>

          {/* Subscribe Form */}
          <form className="flex flex-col gap-4">
            <Input type="email" placeholder="contact@gmail.com" required={true} labelValue={"Mail Id"} />
            <Button>Submit</Button>
          </form>

        </div>
      </div>

      <Separator />

      {/* Middle */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">

        {FooterLinks.map((data, index) => (
          <div key={index} className="flex flex-col gap-5">

            <h1 className="flex items-center gap-4 text-xl font-bold">{data.icon}{data.title}</h1>

            <div className="flex flex-col gap-5 p-2">

              {data.links.map((data, index) => (

                <Link href={data.subHref} key={index} className="flex items-center gap-4 font-medium tracking-tight transition-all duration-300 w-fit hover:text-blue-500">
                  <span>{data.subIcon}</span>
                  {data.subTitle}
                </Link>

              ))}

            </div>
          </div>
        ))}

      </div>

      <Separator />

      {/* Bottom */}
      <div className="flex flex-col items-center justify-between w-full gap-5 pb-5 md:flex-row">
      <h1 className="text-sm font-semibold text-center">© {year} All Rights Reserved by SS SOFTWARE</h1>
      <SocialMedia />
      </div>

    </footer>
  )
}

export default Footer