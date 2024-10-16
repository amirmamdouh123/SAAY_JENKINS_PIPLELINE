import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import logo_1 from "@assets/homeImgs/scroller_logos/logo_1.svg";
import logo_2 from "@assets/homeImgs/scroller_logos/logo_2.svg";
import logo_3 from "@assets/homeImgs/scroller_logos/logo_3.svg";
import logo_4 from "@assets/homeImgs/scroller_logos/logo_4.svg";
import logo_5 from "@assets/homeImgs/scroller_logos/logo_5.svg";
import logo_6 from "@assets/homeImgs/scroller_logos/logo_6.svg";
import logo_7 from "@assets/homeImgs/scroller_logos/logo_7.svg";
import logo_8 from "@assets/homeImgs/scroller_logos/logo_8.svg";
import logo_9 from "@assets/homeImgs/scroller_logos/logo_9.png";
import logo_10 from "@assets/homeImgs/scroller_logos/logo_10.png";
import logo_11 from "@assets/homeImgs/scroller_logos/logo_11.png";
import logo_12 from "@assets/homeImgs/scroller_logos/logo_12.png";
import logo_13 from "@assets/homeImgs/scroller_logos/logo_13.png";
import logo_14 from "@assets/homeImgs/scroller_logos/logo_14.png";
import logo_15 from "@assets/homeImgs/scroller_logos/logo_15.png";
import logo_16 from "@assets/homeImgs/scroller_logos/logo_16.png";
import logo_17 from "@assets/homeImgs/scroller_logos/logo_17.png";
import logo_18 from "@assets/homeImgs/scroller_logos/logo_18.jpg";
import logo_19 from "@assets/homeImgs/scroller_logos/logo_19.png";
import logo_20 from "@assets/homeImgs/scroller_logos/logo_20.png";
import logo_21 from "@assets/homeImgs/scroller_logos/logo_21.png";
import logo_22 from "@assets/homeImgs/scroller_logos/logo_22.jpg";
import { Autoplay } from "swiper/modules";

const companiesImgs = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
  logo_9,
  logo_10,
  logo_11,
  logo_12,
  logo_13,
  logo_14,
  logo_15,
  logo_16,
  logo_17,
  logo_18,
  logo_19,
  logo_20,
  logo_21,
  logo_22,
];

const SupportCompanies = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={3000}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
      className="mySwiper items-center justify-center"
    >
      {companiesImgs.map((companyImg, index) => {
        return (
          <SwiperSlide
            key={index}
            className="!flex items-center justify-center"
          >
            <img src={companyImg} alt="company logo" width={80} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SupportCompanies;
