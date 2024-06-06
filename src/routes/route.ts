// page
import HomePage from "../pages/user/HomePage";
import NotFound from "../pages/user/NotFound";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import Faq from "../pages/user/Faq";
import Users from "../pages/admin/Users";
import Main from "../pages/admin/Main";
import Products from "../pages/user/Products";
import Profile from "../pages/user/Profile";
import VerifyEmail from "../pages/user/VerifyEmail";
import AddProduct from "@/pages/admin/AddProduct";
import ContactUs from "@/pages/user/ContactUs";
import Cart from "@/pages/user/Cart";

interface RouteType {
  id: number;
  path: string;
  title: string;
  panelAdmin?: boolean;
  component: React.FC<{}>
}
// array of routes
export const routes: RouteType[] = [
  { id: 0, path: "*", title: "404", component: NotFound },
  { id: 1, path: "/", title: "main page", component: HomePage },
  { id: 2, path: "/register", title: "register", component: Register },
  { id: 3, path: "/login", title: "login", component: Login },
  { id: 4, path: "/faq", title: "faq", component: Faq },
  { id: 5, path: "/admin", title: "main", component: Main, panelAdmin: true },
  { id: 6, path: "/admin/users", title: "users", component: Users, panelAdmin: true },
  { id: 7, path: "/admin/create-product", title: "Add Product", component: AddProduct, panelAdmin: true },
  { id: 8, path: "/products", title: "products", component: Products },
  { id: 9, path: "/profile", title: "profile", component: Profile },
  { id: 10, path: "/profile/verfiy-email", title: "profile", component: VerifyEmail },
  { id: 11, path: "/contact-us", title: "Contact Us", component: ContactUs },
  { id: 11, path: "/cart", title: "cart", component: Cart },
];
