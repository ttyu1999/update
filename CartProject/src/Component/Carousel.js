import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css'; 


const Carousel = () => {

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
            <SwiperSlide>
                <a>
                    <img src="img/臉部保養banner.jpg" alt="文宣" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a>
                    <img src="img/臉部保養banner(2).jpg" alt="文宣" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a>
                    <img src="img/臉部保養banner(3).jpg" alt="文宣" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a>
                    <img src="img/臉部保養banner(4).jpg" alt="文宣" />
                </a>
            </SwiperSlide>
        </Swiper>
    )
}
export default Carousel;