// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Carousel.scss';
// img
import carouselImg1 from '../../assets/carousel/ml-1.png';
import carouselImg2 from '../../assets/carousel/ml-2.png';
import carouselImg3 from '../../assets/carousel/ml-3.png';
import carouselImg4 from '../../assets/carousel/ml-4.png';

const carouselList = [
  {
    href: 'https://www.mercadolibre.com.ar/',
    src: carouselImg1,
  },
  {
    href: 'https://www.mercadolibre.com.ar/',
    src: carouselImg2,
  },
  {
    href: 'https://www.mercadolibre.com.ar/',
    src: carouselImg3,
  },
  {
    href: 'https://www.danteexpo.com/',
    src: carouselImg4,
  },
];

const Carousel = () => {
  return (
    <section className="max-w-[1600px] mx-auto shadow swiper-carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
      >
        {carouselList.map((item) => (
          <SwiperSlide key={item.src}>
            <a href={item.href} rel="noreferrer" target="_blank">
              <img
                src={item.src}
                alt=""
                className="h-[340px] w-full object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Carousel;
