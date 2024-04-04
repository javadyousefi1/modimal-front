import { ReactNode, useEffect, useState } from "react";
// components
import Footer from "@components/Footer";
import Header from "@components/Header";
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
    <div className="flex">
      <Sidebar />
      <div className="w-full h-screen px-8 overflow-y-scroll bg-neutral-200">{children}</div>
    </div>
  );
};

export default Layout;
