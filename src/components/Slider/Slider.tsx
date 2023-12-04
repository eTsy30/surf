import './style.scss';

import { Card } from '@components/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import { card } from '../../MOCK/Card';

export const Slider = () => {
  return (
    <div className="sliderContainer" id="slider">
      <Swiper slidesPerView={4} spaceBetween={1} className="mySwiper">
        {card.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card image={item.image} title={item.title} supTitle={item.supTitle} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
