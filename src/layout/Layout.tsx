import { ReactNode, useEffect, useState } from "react";
// components
import Footer from "@components/Footer";
import Header from "@components/header/Header";
// rrd
import { useLocation } from "react-router";
// routes
import { routes } from "../routes/route";
import Sidebar from "@components/admin/Sidebar";

type LayoutPropType = {
  children: ReactNode;
};

const Layout: React.FC<LayoutPropType> = ({ children }) => {
  const [currentRolePage, setCurrentRolePage] = useState<string | null>(null);
  const { pathname } = useLocation();

  // change title of each page dynamic by route
  useEffect(() => {
    const currentRouteTitle = routes.find((r) => r.path === pathname);
    document.title = currentRouteTitle?.title ?? "صفحه ای یافت نشد";

    let checkRoute = currentRouteTitle?.panelAdmin ? "admin" : "user";
    setCurrentRolePage(checkRoute);
  }, [pathname]);

  if (currentRolePage === "user") {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }

  return (
    <div className="flex flex-col w-full md:flex-row">
      <Sidebar />
      <div className="w-full h-screen p-4 overflow-y-scroll md:p-8 bg-neutral-200 mt-[60px] md:mt-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;
