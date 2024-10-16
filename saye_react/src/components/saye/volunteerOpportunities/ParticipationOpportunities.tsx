import { useState } from "react";

const ParticipationOpportunities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="volunteer-opportunities section-padding">
      <div className="container">
        <h2 className="section-title mb-5 text-center">
          فرص التطوع <span className="text-myGreen-dark">المتاحة</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "مشروع التوعية الصحية",
              description:
                "انضم إلى فريقنا في مشروع التوعية الصحية وتساعد في نشر الوعي حول الصحة والتغذية السليمة.",
            },
            {
              title: "برنامج التعليم",
              description:
                "ساهم في تحسين مستوى التعليم للأطفال من خلال تقديم الدروس والمساعدة في الواجبات المدرسية.",
            },
            {
              title: "جمع التبرعات",
              description:
                "ساعدنا في تنظيم فعاليات لجمع التبرعات لدعم مشاريعنا ومبادراتنا المختلفة.",
            },
            {
              title: "توعية المجتمع",
              description:
                "شارك في تنظيم حملات توعية للمجتمع حول القضايا المهمة وطرق المساهمة في الحلول.",
            },
            {
              title: "مشروع النظافة العامة",
              description:
                "شارك في جهود تنظيف الأحياء والشوارع لتعزيز الوعي البيئي والحفاظ على النظافة.",
            },
            {
              title: "دعم كبار السن",
              description:
                "انضم إلى فريقنا لمساعدة كبار السن من خلال تقديم الرعاية والمساعدة في حياتهم اليومية.",
            },
            {
              title: "حماية البيئة",
              description:
                "ساعد في جهود حماية البيئة من خلال غرس الأشجار والمشاركة في حملات التوعية البيئية.",
            },
            {
              title: "التدريب المهني",
              description:
                "انضم إلينا لتقديم دورات تدريبية في مجالات مهنية متعددة لتطوير مهارات الشباب.",
            },
            {
              title: "الدعم النفسي والاجتماعي",
              description:
                "قدم الدعم النفسي والاجتماعي للفئات المحتاجة لمساعدتهم على التغلب على الصعوبات.",
            },
          ].map((opportunity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <a className="h4 d-block mb-4 text-lg font-bold" href="#!">
                {opportunity.title}
              </a>
              <p>{opportunity.description}</p>
              <button
                className="mt-4 bg-myGreen-dark text-white rounded-md px-4 py-2 hover:bg-myGreen-hover transition"
                onClick={openModal}
              >
                تقديم
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-60"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded-lg shadow-xl p-8 z-50 w-full max-w-md">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h5 className="modal-title text-xl font-semibold text-gray-800">
                نموذج التقديم
              </h5>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 text-lg"
              >
                &times;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md focus:ring-1 focus:ring-myGreen-dark focus:outline-none w-full p-2"
                  id="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-md focus:ring-1 focus:ring-myGreen-dark focus:outline-none w-full p-2"
                  id="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  className="border border-gray-300 rounded-md focus:ring-1 focus:ring-myGreen-dark focus:outline-none w-full p-2"
                  id="phone"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="volunteerOpportunities"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  اختر فرصة التطوع
                </label>
                <select
                  className="border border-gray-300 rounded-md focus:ring-1 focus:ring-myGreen-dark focus:outline-none w-full p-2"
                  id="volunteerOpportunities"
                >
                  <option value="health">مشروع التوعية الصحية</option>
                  <option value="education">برنامج التعليم</option>
                  <option value="fundraising">جمع التبرعات</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn bg-myGreen-dark text-white rounded-md px-4 py-2 w-full hover:bg-myGreen-hover transition"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ParticipationOpportunities;
