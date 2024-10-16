import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import landing_1 from "@assets/landingSwiper/landing_1.jpg";
import landing_2 from "@assets/landingSwiper/landing_2.jpg";
import landing_3 from "@assets/landingSwiper/landing_3.jpg";
import landing_4 from "@assets/landingSwiper/landing_4.jpg";
import { CustomLink } from "@/components/common";

const slidesData = [
  { img: landing_1, alt: "Landing 1", text: "مرحباً بكم في موقعنا!" },
  { img: landing_2, alt: "Landing 2", text: "انضم إلينا اليوم!" },
  { img: landing_3, alt: "Landing 3", text: "نحدث فرقاً معاً!" },
  { img: landing_4, alt: "Landing 4", text: "معاً نستطيع!" },
];

const Landing = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
      className="mySwiper"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.img}
            alt={slide.alt}
            loading="lazy"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70">
            <h2 className="text-white text-2xl font-bold mb-4">{slide.text}</h2>
            <CustomLink link="/join-us" text="انضم إلينا" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Landing;
