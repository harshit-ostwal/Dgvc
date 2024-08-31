"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { SliderData } from '@/data/Home/Slider';
import Image from 'next/image';
import 'swiper/css/effect-fade';

export function Slider() {

    return (
        <Swiper
            effect={'fade'}
            autoplay={{
                delay: 7000,
            }}
            loop={true}
            modules={[Autoplay, EffectFade]}
        >
            {SliderData.map((data, index) => (
                <SwiperSlide key={index}>
                    <Image src={data.imageUrl} alt="Dg Vaishnav College" className="w-full h-[13rem] sm:h-[16rem] md:h-[26rem] lg:h-[32rem] 2xl:h-[45rem]" fetchPriority="high" loading="eager" quality={100} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}