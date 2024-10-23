import { ReactNode, useEffect } from "react";
// components
import Footer from "@components/Footer";
import Header from "@components/user/header/Header";
// rrd
import { useLocation } from "react-router";
// routes
import { routes } from "../routes/route";
import Sidebar from "@components/admin/Sidebar";

type LayoutPropType = {
  children: ReactNode;
};

const Layout: React.FC<LayoutPropType> = ({ children }) => {
  const { pathname } = useLocation();

  // change title of each page dynamic by route
  useEffect(() => {
    // scroll to page first
    window.scrollTo(0, 0);
    // set title of each page
    const currentRouteTitle = routes.find((r) => r.path === pathname);
    document.title = currentRouteTitle?.title ?? "صفحه ای یافت نشد";
  }, [pathname]);

  if (!pathname.includes("admin")) {
    return (
      <>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </>
    );
  }

  return (
    <div className="flex flex-col w-full md:flex-row">
      <Sidebar />
      <div className="w-full h-screen p-4  overflow-y-scroll md:p-8 bg-neutral-200 mt-[60px] md:mt-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;
