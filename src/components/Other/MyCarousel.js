import React, { useEffect, useState } from 'react';
import {Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';

const MyCarousel = ({ data }) => {
  const [carouselData, setCarouselData] = useState(localStorage.getItem(null));

  useEffect(() => {
    console.log(typeof(data));
    if (typeof(data) == 'string') {
      const parsedData = JSON.parse(data);
      setCarouselData(parsedData);
    }
    else{
      setCarouselData(data);
    }
  }, [])
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      style={{ padding: '3rem', paddingLeft: '1rem', marginTop: '3rem' }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false,
      }}
    >
      {carouselData && carouselData.section1.carouselData && Object.keys(carouselData.section1.carouselData).map((slideKey, index) => (
        <SwiperSlide key={index}>
          <div className="row">
            <div className="col-lg-8">
              <h1 className="fs-1 card-head fw-bold">{carouselData.section1.carouselData[slideKey].heading}</h1>
              <p className="fs-5 mt-sm-0 mt-2">{carouselData.section1.carouselData[slideKey].content}</p>
            </div>
            <div className="col-lg-4">
              <img
                className="d-block w-100"
                src={carouselData.section1.carouselData[slideKey].image}
                alt={`Slide ${index + 1} Image`}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyCarousel;
