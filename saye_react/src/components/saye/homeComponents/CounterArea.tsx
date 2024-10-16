import { FaUsers, FaDonate, FaProjectDiagram, FaGlobe } from "react-icons/fa"; // Import icons from React Icons

interface CounterItemProps {
  icon: JSX.Element;
  count: number;
  label: string;
}

const CounterItem = ({ icon, count, label }: CounterItemProps) => {
  return (
    <div className="text-center p-12 transition-transform duration-400 transform border border-gray-100 hover:scale-105 hover:shadow-lg">
      <div className="bg-myGreen-hover p-5 rounded-md mx-auto text-white text-2xl flex items-center justify-center">
        {icon}
      </div>
      <span className="counter block text-5xl font-bold my-5 text-black">
        {count}
      </span>
      <h3 className="text-xl font-normal text-black">{label}</h3>
    </div>
  );
};

const CounterArea = () => {
  return (
    <section className="counter-area bg-gray-50 py-12 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <CounterItem icon={<FaUsers />} count={4000} label="المتطوعين" />
          <CounterItem icon={<FaDonate />} count={7600} label="التبرعات" />
          <CounterItem
            icon={<FaProjectDiagram />}
            count={100}
            label="إجمالي المشاريع"
          />
          <CounterItem icon={<FaGlobe />} count={200} label="الدول" />
        </div>
      </div>
    </section>
  );
};

export default CounterArea;
