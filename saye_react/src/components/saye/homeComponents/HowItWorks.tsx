type TStepProps = {
  title: string;
  description: string;
};

const StepCard = ({ title, description }: TStepProps) => (
  <div className="step bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-myGreen-hover">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps: TStepProps[] = [
    {
      title: "التبرعات",
      description:
        "نستقبل التبرعات من الجهات الداعمة والأفراد المهتمين بالعمل الخيري.",
    },
    {
      title: "التخطيط",
      description:
        "نقوم بتخطيط المبادرات والمشاريع التطوعية بناءً على احتياجات المجتمع.",
    },
    {
      title: "المتطوعين",
      description:
        "نقوم بتوظيف المتطوعين المناسبين للمشاريع المختلفة وفقًا لمهاراتهم.",
    },
    {
      title: "الأثر",
      description:
        "نقيّم نتائج المبادرات وننشر الأثر الإيجابي الذي تحقق من خلال عملنا.",
    },
  ];

  return (
    <section id="how-it-works" className="text-center py-12 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          كيف تعمل <span className="text-myGreen-dark">الجمعية</span>؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
