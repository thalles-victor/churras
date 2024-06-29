"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

import NextImage from "next/image";

import Client5Image from "@/assets/client5.webp";
import { Pagination, FreeMode } from "swiper/modules";

export function Recommendations() {
  return (
    <section className="desktop:flex w-[60vw] justify-between items-center gap-8">
      <div className="flex flex-col">
        <h1 className="text-2xl text-white font-bold text-nowrap text-center">
          O que nossos alunos falam
        </h1>
        <p className="text-2xl text-[#DE4A48] font-medium md:text-3xl text-center">
          sobre nosso curso.
        </p>
      </div>

      <Swiper
        slidesPerView="auto"
        centeredSlides
        spaceBetween={40}
        centeredSlidesBounds
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwipper"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

function Card() {
  return (
    <div className="w-full h-full flex border-[1px] border-gray-200/20 bg-zinc-800 bg-opacity-[0.4] rounded-xl px-10 py-14">
      <div className="flex flex-col  w-[310px] items-center gap-8">
        <p className="text-base text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div>
          <NextImage
            className="object-cover w-[60px] h-[60px] rounded-full"
            src={Client5Image}
            width={60}
            height={60}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
