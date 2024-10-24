import ErrorPage from "../../errors/ErrorPage"
import Auth from "./Auth"
import Login from "./Login"
import Register from "./Register"
import VerifyEmail from "./VerifyEmail"


export const LoginRoutes = {
  path: "/auth",
  element: <Auth />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "Login",
      element: <Login />
    },
    {
      path: "Register",
      element: <Register />
    },
    {
      path: "VerifyEmail",
      element: <VerifyEmail />
    }
  ],
}