import {
  FaBroom,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaHandHoldingHeart,
  FaNotesMedical,
  FaHandHoldingUsd,
} from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      icon: (
        <FaBroom className="text-4xl mb-4 text-gray-600 group-hover:text-red-600 transition duration-500 group-hover:-translate-y-2 mx-auto" />
      ),
      title: "خدمات النظافة العامة",
      description:
        "نحن نعمل على تحسين ظروف النظافة في المجتمعات المحتاجة، لضمان بيئة صحية وآمنة للجميع.",
    },
    {
      icon: (
        <FaHandsHelping className="text-4xl mb-4 text-gray-600 group-hover:text-red-600 transition duration-500 group-hover:-translate-y-2 mx-auto" />
      ),
      title: "زيادة الوعي",
      description:
        "نهدف إلى نشر الوعي حول القضايا الاجتماعية والصحية من خلال ورش العمل والبرامج التثقيفية.",
    },
    {
      icon: (
        <FaChalkboardTeacher className="text-4xl mb-4 text-gray-600 group-hover:text-red-600 transition duration-500 group-hover:-translate-y-2 mx-auto" />
      ),
      title: "برامج التعليم",
      description:
        "نقدم فرصًا تعليمية للأطفال والشباب في المناطق المحتاجة، بهدف تمكينهم من بناء مستقبل أفضل.",
    },
    {
      icon: (
        <FaHandHoldingHeart className="text-4xl mb-4 text-gray-600 group-hover:text-red-600 transition duration-500 group-hover:-translate-y-2 mx-auto" />
      ),
      title: "التبرعات",
      description:
        "ننسق حملات التبرع لتقديم الدعم المالي والمادي للأسر والمجتمعات الأكثر حاجة.",
    },
    {
      icon: (
        <FaNotesMedical className="text-4xl mb-4 text-gray-600 group-hover:text-red-600 transition duration-500 group-hover:-translate-y-2 mx-auto" />
      ),
      title: "البرامج الطبية",
      description:
        "نقدم خدمات الرعاية الطبية للمحتاجين، بما في ذلك الفحوصات الطبية والعلاج المجاني.",
    },
    {
      icon: (
        <FaHandHoldingUsd className="text-4xl mb-4 text-gray-600 group-hover:text-red-600 transition duration-500 group-hover:-translate-y-2 mx-auto" />
      ),
      title: "مكافحة الفقر",
      description:
        "نحن نعمل على تخفيف الفقر من خلال تقديم الدعم المالي والمساعدات الإنسانية للمجتمعات الأكثر تضررًا.",
    },
  ];

  return (
    <section className="services py-16 bg-white" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            خدماتنا <span className="text-myGreen-dark">التطوعية</span>
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            نحن فريق غير ربحي نسعى إلى تقديم المساعدة والدعم لمجتمعاتنا منذ
            أوائل القرن العشرين. نؤمن بأن العمل التطوعي هو حجر الأساس لبناء
            مجتمعات أكثر تماسكًا واستدامة.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item p-6 text-center border rounded-md  hover:bg-gray-100 transition duration-300 group"
            >
              <span className="icon">{service.icon}</span>
              <h4 className="font-bold text-lg hover:text-myGreen-hover transition duration-300">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
