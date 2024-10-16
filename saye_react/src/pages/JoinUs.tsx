import {
  Faq,
  FeatureCard,
  JoinusForm,
} from "@/components/saye/joinusComponents";

import join_1 from "@assets/join-1.jpeg";
import join_2 from "@assets/join-2.jpeg";
import join_3 from "@assets/join-3.jpeg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="pt-22">
      <div className="relative  h-[50vh] flex items-center justify-center text-white bg-[url('assets/joinus_landing.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>{" "}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            انضم إلى فريق يسعى لصنع التغيير
          </h2>
          <p className="text-lg lg:text-xl mt-4">
            كن جزءًا من رحلة الإبداع والتطوير معنا وساهم في بناء مستقبل أفضل.
          </p>
        </div>
      </div>

      <section className="features py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">مميزات الانضمام</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              imageSrc={join_1}
              altText="تطوير المهارات الشخصية والمهنية"
              title="تطوير المهارات الشخصية والمهنية"
              description="في فريق 'سعي'، ستتاح لك الفرصة للعمل على مشاريع حقيقية تخدم المجتمع."
            />
            <FeatureCard
              imageSrc={join_2}
              altText="العمل في بيئة مليئة بالشغف والتحديات"
              title="العمل في بيئة مليئة بالشغف والتحديات"
              description="العمل في هذه البيئة يمنحك تحديات يومية تحفزك على الابتكار والتطوير المستمر."
            />
            <FeatureCard
              imageSrc={join_3}
              altText="المساهمة في إحداث أثر إيجابي في المجتمع"
              title="المساهمة في إحداث أثر إيجابي في المجتمع"
              description="ستعمل على مشاريع تهدف إلى دعم المبادرات المجتمعية."
            />
          </div>
        </div>
      </section>

      <JoinusForm />

      <Faq />

      <section className="py-12 bg-gray-50 relative text-center">
        <h4 className="text-2xl font-bold mb-6">
          تابعنا على وسائل التواصل الاجتماعي
        </h4>
        <div className="flex justify-center items-center gap-2 relative">
          <Link
            to="#"
            className="text-2xl transition duration-300 hover:text-red-600"
          >
            <FaFacebook />
          </Link>
          <Link
            to="#"
            className="text-2xl transition duration-300 hover:text-red-600"
          >
            <FaTwitter />
          </Link>
          <Link
            to="#"
            className="text-2xl transition duration-300 hover:text-red-600"
          >
            <FaInstagram />
          </Link>
          <Link
            to="#"
            className="text-2xl transition duration-300 hover:text-red-600"
          >
            <FaLinkedin />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
