import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const TwoCompSwiper = ({ images }) => {
    return (
        <Swiper
            modules={[
                Autoplay,
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectFade
            ]}
            loop
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false, // Optional, but recommended
            }}
            effect='fade'

            // navigation={{
            //     nextEl: '.swiper-button-next', // Specify the custom class
            //     prevEl: '.swiper-button-prev', // Specify the custom class
            // }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img className=''
                            src={image}
                            alt=""
                        />
                    </SwiperSlide>
                ))

            }

        </Swiper>
    );
};

TwoCompSwiper.propTypes = {
    images: PropTypes.array.isRequired,
};

export default TwoCompSwiper
