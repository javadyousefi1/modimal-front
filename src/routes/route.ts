// const baseUrl = import.meta.env.VITE_APP_BASE_URL
// rrd
import { createBrowserRouter } from "react-router-dom";
// routes
import { LoginRoutes } from "@/app/auth/login/Login.routes";
import { landingRoutes } from "@/app/landing/Landing.routes";

const router = createBrowserRouter([landingRoutes, LoginRoutes]);

export default router;