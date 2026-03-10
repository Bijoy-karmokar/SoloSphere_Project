import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '../../assets/carousel1.jpg';
import Image2 from '../../assets/carousel2.jpg';
import Image3 from '../../assets/carousel3.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Banner() {
  return (
    <div className='my-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide image={Image1} text="Get the web Developer."></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={Image2} text="Get the Grafics Designer."></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={Image3} text="Get the Marketing."></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
