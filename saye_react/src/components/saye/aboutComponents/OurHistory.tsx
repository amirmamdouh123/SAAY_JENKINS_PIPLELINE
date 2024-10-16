const OurHistory = () => {
  const historyEvents = [
    {
      year: "2017",
      title: "تأسيس خط المساعدة",
      description:
        "بدأنا في عام 2017 بتأسيس خط المساعدة لتقديم الدعم والمساندة للأفراد والمجتمعات.",
    },
    {
      year: "2019",
      title: "ملكية المجتمع",
      description:
        "في عام 2019، أصبحنا ملكية مجتمعية، نعمل جنباً إلى جنب مع مجتمعاتنا لتحسين الحياة.",
    },
    {
      year: "2021",
      title: "منظمة العام الخيرية",
      description:
        "حصلنا في عام 2021 على جائزة منظمة العام الخيرية تقديراً لجهودنا المستمرة في دعم المجتمع.",
    },
    {
      year: "2018",
      title: "الاجتماعات العامة",
      description:
        "عقدنا في عام 2018 سلسلة من الاجتماعات العامة لتعزيز المشاركة المجتمعية وتبادل الأفكار.",
    },
    {
      year: "2020",
      title: "تمويل كامل",
      description:
        "بحلول عام 2020، حصلنا على تمويل كامل لتحقيق رؤيتنا في تقديم خدمات مميزة لمجتمعاتنا.",
    },
  ];

  return (
    <section className="history  py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-myGreen-dark">تاريخنا</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            على مدار السنوات، قطعنا شوطاً طويلاً في تقديم المساعدة وتحقيق تأثير
            إيجابي في مجتمعاتنا.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {historyEvents.slice(0, 3).map((event, index) => (
            <div
              key={index}
              className="p-6 text-center border rounded-md bg-white shadow-md relative"
            >
              <div className="">
                <h4 className="h5 mb-3 text-lg font-semibold text-myGreen-dark">
                  {event.year}: {event.title}
                </h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" my-8 border-t-2 border-gray-200"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          {historyEvents.slice(3).map((event, index) => (
            <div
              key={index}
              className=" p-6 text-center border rounded-md bg-white shadow-md relative"
            >
              <div className="">
                <h4 className="h5 mb-3 text-lg font-semibold text-myGreen-dark">
                  {event.year}: {event.title}
                </h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
