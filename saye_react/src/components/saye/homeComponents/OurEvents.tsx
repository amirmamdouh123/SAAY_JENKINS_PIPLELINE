import tasger from "@assets/homeImgs/tasger.jpg";

const OurEvents = () => {
  return (
    <section className="" id="events">
      <div className="container">
        <div className=" mb-5 text-center">
          <h2 className="mb-3 text-[35px] font-bold text-gray-800">
            فعالياتنا
          </h2>
          <p>كن جزءًا من حملة تشجير، وامنح كوكبنا حياة جديدة</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 mb-4 lg:mb-0 flex flex-col gap-4">
            <h3 className="font-medium text-2xl">حملة التشجير</h3>
            <p>
              انضم إلينا في حملة التشجير التي تهدف إلى تعزيز المساحات الخضراء
              والمساهمة في الحفاظ على البيئة. هذه المبادرة تهدف إلى غرس أشجار
              جديدة في مناطق مختلفة لزيادة الوعي بأهمية الحفاظ على الطبيعة.
            </p>
            <button
              className="bg-myGreen-dark text-white text-sm rounded-3xl font-bold px-5 py-3 
              transition-all  hover:bg-myGreen-hover w-fit"
            >
              إعرف التفاصيل
            </button>
          </div>

          <div className="lg:w-1/2 ">
            <img
              src={tasger}
              alt="حملة تشجير"
              loading="lazy"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
