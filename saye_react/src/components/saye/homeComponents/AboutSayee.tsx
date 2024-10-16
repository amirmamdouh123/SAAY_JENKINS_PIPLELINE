import { FaCheckCircle } from "react-icons/fa";

import vision from "@assets/homeImgs/vision.jpg";

const AboutUs = () => {
  return (
    <section className="about-us py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <img
              src={vision}
              alt="mission"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="section-title mb-4 text-[35px] font-bold text-gray-800">
              عن جمعية <span className="text-myGreen-dark">سعى</span>
            </h2>
            <p className="text-gray-700 mb-4 text-[16px] leading-[1.8]">
              جمعية سعى هي منظمة غير ربحية تهدف إلى تحقيق التغيير الإيجابي في
              المجتمع من خلال العمل التطوعي والمبادرات الإنسانية. تأسست الجمعية
              في بدايات القرن العشرين، ومنذ ذلك الحين ونحن نعمل جاهدين لتحقيق
              الأهداف الإنسانية ودعم القضايا الاجتماعية المهمة.
            </p>
            <ul className="my-5  text-gray-700">
              <li className="relative mb-2 font-medium leading-[30px] flex items-center gap-2">
                <FaCheckCircle className="text-myGreen-dark" />
                تقديم الدعم والمساعدة للأفراد والمجتمعات المحتاجة
              </li>
              <li className="relative mb-2 font-medium leading-[30px] flex items-center gap-2">
                <FaCheckCircle className="text-myGreen-dark" />
                تنظيم ورش عمل ومبادرات لتوعية المجتمع وتعليم المهارات الحياتية
              </li>
              <li className="relative mb-2 font-medium leading-[30px] flex items-center gap-2">
                <FaCheckCircle className="text-myGreen-dark" />
                تشجيع العمل التطوعي والمشاركة الفعالة في قضايا المجتمع
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
