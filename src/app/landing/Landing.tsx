// rrrd
import { Outlet } from "react-router-dom";
// ui kit
import LandingLayout from "../../layout/LandingLayout";
// layoyut component
import Header from "@/components/user/header-footer/Header";
import Footer from "@/components/user/header-footer/Footer";

const Landing = () => {
  return (
    <LandingLayout Header={Header} Footer={Footer}>
        <Outlet />
    </LandingLayout>
  );
};

export default Landing;
