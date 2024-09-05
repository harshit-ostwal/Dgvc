"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { SliderData } from '@/data/Home/Slider';
import 'swiper/css/effect-fade';
import { NextImage } from '@/components/NextImage';

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
                    <NextImage Src={data.imageUrl} Loading="lazy" Alt="Dg Vaishnav College" ClassName="w-full h-[14rem] sm:h-[20rem] md:h-[26rem] lg:h-[32rem] xl:h-[38rem] 2xl:h-[42rem]" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}