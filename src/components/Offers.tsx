// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import items from '../items.json';

const Offers = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="flex items-end gap-4">
        <h1 className="font-extralight text-2xl">Ofertas</h1>
        <p className="text-[#3483fa] cursor-pointer hover:text-[#1259c3]">
          Ver todas
        </p>
      </span>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
      >
        {items &&
          items.map((item) => (
            <SwiperSlide key={item.name}>{item.price}</SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
export default Offers;
