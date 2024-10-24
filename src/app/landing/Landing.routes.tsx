// react
import { Children, lazy, ReactNode, Suspense } from "react";
// component
import Fallback from "../landing/fallback/Fallback";

// import Users from "../app/admin/Users";
// import Main from "../app/admin/Main";
// import AddProduct from "@/app/admin/AddProduct";

const HomePage = lazy(() => import("./pages/HomePage"));
const Cart = lazy(() => import("./pages/Cart"));
const Landing = lazy(() => import("./Landing"));
const ErrorPage = lazy(() => import("../errors/ErrorPage"));
const Faq = lazy(() => import("./pages/Faq"));
const Products = lazy(() => import("./pages/Products"));
const Profile = lazy(() => import("./pages/Profile"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Product = lazy(() => import("./pages/Product"));
const NotFound = lazy(() => import("@/components/NotFound"));

interface SuspenseWrapperProps {
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  fallback?: ReactNode;
}

// Reusable Suspense Wrapper
const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({
  component: Component,
  fallback = <Fallback />,
}) => (
  <Suspense fallback={fallback}>
    <Component />
  </Suspense>
);

export const landingRoutes = {
  path: "/",
  element: <Landing />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "",
      element: <SuspenseWrapper component={HomePage} />,
    },
    {
      path: "cart",
      element: <SuspenseWrapper component={Cart} />,
    },
    {
      path: "faq",
      element: <SuspenseWrapper component={Faq} />,
    },
    {
      path: "Products",
      element: <SuspenseWrapper component={Products} />,
    },
    {
      path: "Profile",
      element: <SuspenseWrapper component={Profile} />,
    },
    {
      path: "ContactUs",
      element: <SuspenseWrapper component={ContactUs} />,
    },
    {
      path: "Products/:id",
      element: <SuspenseWrapper component={Product} />,
    },
    {
      path: "*",
      element: <SuspenseWrapper component={NotFound} />,
    },
  ],
};


