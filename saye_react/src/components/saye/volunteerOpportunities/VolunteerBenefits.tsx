const VolunteerBenefits = () => {
  return (
    <section className="bg-gray-100 py-12 mt-8">
      <div className="container mx-auto">
        <h2 className="mb-5 text-center text-2xl font-bold">
          فوائد <span className="text-myGreen-dark">التطوع</span>
        </h2>
        <ul className="list-disc ml-5 pl-5">
          <li className="mb-3 text-lg leading-relaxed">
            اكتساب مهارات جديدة وتطوير القدرات الشخصية.
          </li>
          <li className="mb-3 text-lg leading-relaxed">
            التعرف على أشخاص جدد وبناء شبكة اجتماعية قوية.
          </li>
          <li className="mb-3 text-lg leading-relaxed">
            التأثير الإيجابي على المجتمع والمساهمة في تحقيق التغيير.
          </li>
          <li className="mb-3 text-lg leading-relaxed">
            تجربة شخصية وفردية تعزز من الشعور بالإنجاز والتفوق.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VolunteerBenefits;
