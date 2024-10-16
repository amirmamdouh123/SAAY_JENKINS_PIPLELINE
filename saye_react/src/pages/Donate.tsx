import { DonateForm } from "@/components/saye/donateComponents";

const Donate = () => {
  return (
    <div className="pt-24">
      <div className="relative  h-[50vh] flex items-center justify-center text-white bg-[url('assets/donate_landing.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>{" "}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            ساهم في صنع الفرق اليوم
          </h2>
          <p className="text-lg lg:text-xl mt-4">
            تبرع الآن وكن سببًا في إحداث تغيير إيجابي في حياة الآخرين.
          </p>
        </div>
      </div>

      <DonateForm />
    </div>
  );
};

export default Donate;
