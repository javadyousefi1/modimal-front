import { FC } from "react";
// page
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Faq from "../pages/Faq";
import Users from "../pages/admin/Users";

interface RouteType {
  id: number;
  path: string;
  title: string;
  panelAdmin?: boolean;
  component: FC<{}>
}
// array of routes
export const routes: RouteType[] = [
  { id: 0, path: "*", title: "404", component: NotFound },
  { id: 1, path: "/", title: "main page", component: HomePage },
  { id: 2, path: "/register", title: "register", component: Register },
  { id: 3, path: "/login", title: "login", component: Login },
  { id: 4, path: "/faq", title: "faq", component: Faq },
  { id: 5, path: "/users", title: "users", component: Users, panelAdmin: true },
];
