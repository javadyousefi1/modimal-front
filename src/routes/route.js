// page
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

// array of routes
export const routes = [
  { id: 0, path: "*", title: "404", component: NotFound },
  { id: 1, path: "/", title: "main page", component: HomePage },
];
