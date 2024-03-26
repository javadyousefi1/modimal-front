// page
import { ReactNode } from "react";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

interface RouteType {
  id: number;
  path: string;
  title: string;
  component: ReactNode
}
// array of routes
export const routes: RouteType[] = [
  { id: 0, path: "*", title: "404", component: NotFound },
  { id: 1, path: "/", title: "main page", component: HomePage },
];
