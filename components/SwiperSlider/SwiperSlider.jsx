'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

import 'swiper/css/pagination';

import images from '@/data/images.json';

export const SwiperSlider = () => {
    return <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="w-full  xl:max-w-[120rem] mx-auto h-full absolute top-0 left-0 right-0 bottom-0 z-10"
    >
        {images.map((image, index) => (
            <SwiperSlide key={index} className='overflow-hidden !w-auto '>
                <Image src={image.img} alt={image.alt} width={600} height={400} className='h-[500px] w-full object-cover ' />
            </SwiperSlide>
        ))}
    </Swiper>
}
