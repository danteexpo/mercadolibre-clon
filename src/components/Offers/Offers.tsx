// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Offers.scss';
// img
import Rayo from '../../assets/offers/rayo.svg';
// products
import products from '../../products';

const Offers = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="flex items-end gap-4">
        <h1 className="font-extralight text-2xl">Ofertas</h1>
        <p className="text-[#3483fa] cursor-pointer hover:text-[#1259c3]">
          Ver todas
        </p>
      </span>
      <section className="w-full max-w-6xl mx-auto swiper-offers-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={'auto'}
          navigation
          className="h-[400px]"
        >
          {products &&
            products.map((product) => (
              <SwiperSlide
                key={product.name}
                className="w-[224px] h-[350px] hover:h-[370px] bg-white rounded-b shadow-md divide-y cursor-pointer hover:shadow-xl swiper-offer-container"
              >
                <div className="h-[224px] grid place-items-center">
                  <img src={product.src} alt="" className="max-h-[224px] p-4" />
                </div>
                <div className="h-[126px] p-4">
                  <span className="flex items-center gap-3">
                    <p className="text-xl font-medium">
                      {product.price
                        .toLocaleString('es-AR', {
                          style: 'currency',
                          currency: 'ARS',
                        })
                        .slice(0, -3)}
                    </p>
                    <p className="text-[#00a650] text-xs font-medium">
                      {product.off_percentage}% OFF
                    </p>
                  </span>
                  <span className="flex items-center gap-3">
                    {product.free_ship && (
                      <p className="text-[#00a650] text-sm font-medium">
                        Envío gratis
                      </p>
                    )}
                    {product.full && (
                      <span className="flex items-center gap-1">
                        <img src={Rayo} alt="" className="h-3" />
                        <p className="text-[#00a650] text-xs font-black italic">
                          FULL
                        </p>
                      </span>
                    )}
                  </span>
                  <p className="hidden text-xs opacity-75 mt-4 product-name">
                    {product.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </div>
  );
};
export default Offers;
