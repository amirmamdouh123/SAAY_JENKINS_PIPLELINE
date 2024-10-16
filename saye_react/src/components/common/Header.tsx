import { Link, NavLink } from "react-router-dom"; // Updated import
import logo from "@assets/logo2.svg";
import { ReactNode, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import cn from "@/lib/utils";
import CustomLink from "./CustomLink";

type TNavigationItemProps = {
  to: string;
  children: ReactNode;
  onClick: () => void;
};

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="logo" width="70px" />
  </Link>
);

const NavigationItem = ({ to, children, onClick }: TNavigationItemProps) => (
  <li className="w-full lg:w-auto">
    <NavLink
      className={({ isActive }) =>
        cn("text-gray-600 w-full py-3 px-4 block", {
          "bg-myGreen-dark text-white": isActive,
        })
      }
      to={to}
      onClick={onClick}
    >
      {children}
    </NavLink>
  </li>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="bg-gray-100 fixed w-full top-0 left-0 z-50 shadow-lg">
        <div className="px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 relative">
            <button className={cn("lg:hidden")} onClick={toggleMenu}>
              <IoMenuSharp />
            </button>
            <Logo />
          </div>
          <ul
            className={cn(
              "flex items-center lg:flex-row lg:bg-transparent lg:top-0 lg:p-0 lg:relative lg:w-auto lg:items-center lg:border-none mx-auto",
              {
                hidden: !isMenuOpen,
                "lg:flex flex-col p-4 absolute left-0 top-16 bg-gray-100 w-full items-start border-t-2 ":
                  true,
              }
            )}
          >
            <NavigationItem to="/" onClick={closeMenu}>
              الرئيسية
            </NavigationItem>
            <NavigationItem to="/about" onClick={closeMenu}>
              مبادراتنا
            </NavigationItem>
            <NavigationItem to="/volunteer-opportunity" onClick={closeMenu}>
              فرص التطوع
            </NavigationItem>
            <NavigationItem to="/donate" onClick={closeMenu}>
              التبرعات
            </NavigationItem>
            <NavigationItem to="/contact" onClick={closeMenu}>
              اتصل بنا
            </NavigationItem>
          </ul>
          <CustomLink link={"/auth/login"} text={"تسجيل الدخول"} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
