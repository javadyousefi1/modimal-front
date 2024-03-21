import { useEffect } from "react";
// components
import Footer from "../components/Footer";
import Header from "../components/Header";
// rrd
import { useLocation } from "react-router";
// routes
import { routes } from "../routes/route";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // change title of each page dynamic by route
  useEffect(() => {
    const currentRouteTitle =
      routes.find((r) => r.path === pathname)?.title ?? "صفحه ای یافت نشد";
    document.title = currentRouteTitle;
  }, [pathname]);

  return (
    <>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
