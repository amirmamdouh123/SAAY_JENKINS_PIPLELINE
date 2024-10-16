import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import logo from "@assets/logo.svg";
import { ReactNode } from "react";

type TNavLinkProps = {
  to: string;
  children: ReactNode;
};

const NavLink = ({ to, children }: TNavLinkProps) => (
  <li>
    <Link to={to} className="hover:text-red-600 transition duration-300">
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="pt-5 pb-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-3">
              <img src={logo} alt="شعار" width="120" height="120" />
            </Link>
            <p>
              نعمل بجد لتقديم الدعم والمساعدة لمجتمعاتنا وتحقيق تأثير إيجابي
              مستدام.
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2">
                <FaPhone className="text-red-600"/>
                <span>info@domain.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-600"/>
                <span>+20 123 456 789</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4">روابط سريعة</h5>
            <ul className="flex flex-col space-y-2">
              <NavLink to="/">الرئيسية</NavLink>
              <NavLink to="#">المميزات</NavLink>
              <NavLink to="#">الأسعار</NavLink>
              <NavLink to="#">الأسئلة الشائعة</NavLink>
              <NavLink to="/about">من نحن</NavLink>
            </ul>
          </div>

          <div>
            <h5 className="mb-4">روابط إضافية</h5>
            <ul className="flex flex-col space-y-2">
              <NavLink to="#">المدونة</NavLink>
              <NavLink to="#">اتصل بنا</NavLink>
              <NavLink to="#">المساعدة</NavLink>
              <NavLink to="#">الخصوصية</NavLink>
              <NavLink to="#">الشروط والأحكام</NavLink>
            </ul>
          </div>

          <div>
            <form>
              <h5 className="mb-4">اشترك في نشرتنا الإخبارية</h5>
              <p>احصل على ملخص شهري لأحدث الأخبار والتحديثات مننا.</p>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <input
                  id="newsletter1"
                  type="email"
                  className="flex-grow px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#86C100]"
                  placeholder="البريد الإلكتروني"
                  aria-label="البريد الإلكتروني"
                />
                <button
                  type="button"
                  className="px-6 py-2 bg-myGreen-dark text-white rounded-full hover:bg-myGreen-hover transition duration-300"
                >
                  اشترك
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 mt-8 pt-4">
          <p className="text-gray-600">© 2024 الشركة، جميع الحقوق محفوظة.</p>
          <ul className="flex items-center gap-2">
            {[
              { icon: <FaTwitter />, label: "تويتر", link: "#" },
              { icon: <FaInstagram />, label: "إنستجرام", link: "#" },
              { icon: <FaFacebook />, label: "فيسبوك", link: "#" },
            ].map(({ icon, label, link }) => (
              <li key={label}>
                <Link
                  to={link}
                  className="flex items-center justify-center bg-black w-8 h-8 text-white rounded-full  hover:text-red-600  transition duration-300"
                  aria-label={label}
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
