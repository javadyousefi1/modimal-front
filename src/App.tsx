//css
import "./App.css";
import { RouterProvider } from "react-router-dom";


import router from "./routes/route";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { getCurrentUserData } from "./features/auth";

const App = () => {
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
