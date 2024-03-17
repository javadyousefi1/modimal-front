// page
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

// array of route
export const routes = [
  { id: 0, path: "*", title: "صفحه ای یافت نشد", component: NotFound },
  { id: 1, path: "/", title: "صفحه اصلی", component: HomePage },
];
