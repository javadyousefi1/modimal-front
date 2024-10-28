//css
import "./App.css";
import { RouterProvider } from "react-router-dom";


import router from "./routes/route";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { getCurrentUserData } from "./features/auth";

const App = () => {
  const apiUrl = import.meta.env.VITE_APP_BASE_URL2342

  console.log(apiUrl)

  const test = useSelector((state) => state);
  console.log(test);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // call get current user
    dispatch(getCurrentUserData());
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
