import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; 

import AD_BANNER_IMG from '../../../assets/ad-banner-img';

const BannerCarousel = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
        >
            {AD_BANNER_IMG.map((img) => {
                return (
                    <SwiperSlide key={img.id}>
                        <a>
                            <img src={img.url} alt={img.name} />
                        </a>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}
export default BannerCarousel;