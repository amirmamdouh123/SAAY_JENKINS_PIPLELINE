import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const testimonialsData = [
  {
    text: "عملت مع جمعية سعى وكانت تجربة رائعة. الأثر الذي حققته الجمعية مذهل.",
    name: "محمد علي",
    role: "متطوع",
  },
  {
    text: "استفدت كثيراً من المبادرات التي تقدمها جمعية سعى، والتبرعات كانت سبباً في تحسين حياتي.",
    name: "سارة أحمد",
    role: "مستفيد",
  },
  {
    text: "دائماً ما أجد الدعم والتوجيه من الجمعية.",
    name: "أحمد خالد",
    role: "مستفيد",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials mt-10 bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className=" text-3xl font-semibold mb-8 text-center">
          شهادات <span className="text-myGreen-dark">المستفيدين</span>
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-wrapper flex gap-4"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial bg-white rounded-lg p-6 shadow-lg text-center flex-shrink-0">
                <p className="text-gray-600 text-lg mb-4">{testimonial.text}</p>
                <h5 className="text-xl font-semibold text-black mb-2">
                  {testimonial.name}
                </h5>
                <span className="text-gray-500 text-sm">
                  {testimonial.role}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
