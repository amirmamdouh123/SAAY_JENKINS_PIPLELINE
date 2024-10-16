import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "../../components/common";
import { useEffect } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const noFooterPaths = [
    "/auth/login",
    "/auth/register",
    "/auth/reset-password",
  ];
  const shouldShowFooter = !noFooterPaths.includes(pathname);
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Outlet />
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
