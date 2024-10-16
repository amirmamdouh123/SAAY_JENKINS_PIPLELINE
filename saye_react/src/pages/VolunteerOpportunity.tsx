import { ParticipationOpportunities, VolunteerBenefits } from "@/components/saye/volunteerOpportunities";

const VolunteerOpportunity = () => {
  return (
    <div className="pt-24">
      {/* join us section*/}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-5">
          انضم إلينا <span className="text-myGreen-dark">كمتطوع</span>
        </h2>
        <p className="text-gray-600">
          "نحن في جمعية سعى نؤمن بقوة العمل الجماعي والتطوع. انضم إلينا وساهم في
          تحقيق أهدافنا ومساعدة الآخرين. اكتشف كيف يمكنك أن تكون جزءًا من فريقنا
          وتساهم في إحداث فرق."
        </p>
      </div>

      <ParticipationOpportunities />


      <VolunteerBenefits/>
    </div>
  );
};

export default VolunteerOpportunity;
