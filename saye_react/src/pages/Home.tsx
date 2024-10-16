import {
  AboutSayee,
  CounterArea,
  Landing,
  OurEvents,
  HowItWorks,
  SupportCompanies,
  Testimonials,
} from "@/components/saye/homeComponents";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Landing />
      <AboutSayee />
      <OurEvents />
      <CounterArea />
      <HowItWorks />
      <SupportCompanies />
      <Testimonials />

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="mb-5 text-center text-2xl font-bold">
            كيف تصبح متطوعًا
          </h2>
          <p className="text-center mb-4">
            للانضمام إلينا كمتطوع، يرجى اتباع الخطوات التالية:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              ملء{" "}
              <Link
                to="/login"
                className="underline text-blue-600 hover:text-blue-800"
              >
                نموذج التسجيل
              </Link>{" "}
              المتاح على موقعنا.
            </li>
            <li>الانتظار لتلقي دعوة لمقابلة أو دورة تدريبية.</li>
            <li>حضور الدورة التدريبية والتعرف على المزيد عن الفرص المتاحة.</li>
            <li>البدء في العمل والمشاركة في الأنشطة التطوعية.</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Home;
