import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Wheat from "../../assets/wheat.jpg";

const Solutions = () => {
  const slides = [
    {
      image: Wheat,
      date: "26 December 2019",
      title: "Lorem Ipsum Dolor",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?"
    },
    {
      image: Wheat,
      date: "26 December 2019",
      title: "Lorem Ipsum Dolor 2",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?"
    },
    {
      image: Wheat,
      date: "26 December 2019",
      title: "Lorem Ipsum Dolor 3",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?"
    }
  ];

  return (
    <>
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 sm:mb-8 mt-6">
            Solutions we offer
     </h1>
     <div className="relative max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 h-auto">
    
      <Swiper
        modules={[Pagination, EffectFade]}
        spaceBetween={30}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        className="blog-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex flex-col md:flex-row items-center">
            <div className="w-[300px] h-[300px] bg-gradient-to-r from-orange-400 to-red-500 shadow-lg rounded-lg overflow-hidden mb-6 md:mb-0">
              <img
                src={slide.image}
                alt={`Blog ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <span className="block text-gray-600 mb-4">{slide.date}</span>
              <div className="text-2xl font-bold text-gray-900 mb-5">{slide.title}</div>
              <div className="text-gray-600 mb-6">{slide.content}</div>
              <a href="#" className="inline-flex bg-gradient-to-r from-orange-400 to-red-500 py-3 px-7 rounded-full text-white shadow-lg font-medium transition-transform hover:scale-105">
                READ MORE
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
    
  );
};

export default Solutions;