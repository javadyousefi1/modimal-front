import { useEffect } from "react";
// css
import "./App.css";
// rrd
import { BrowserRouter, Route, Routes } from "react-router-dom";
// route
import { routes } from "./routes/route";
// layout
import Layout from "./layout/Layout";
// react hot toast
import { Toaster } from "react-hot-toast";
// redux
import { useDispatch, useSelector } from "react-redux";
// auth function
import { getCurrentUser } from "./features/auth";
// app store type
import { AppDispatch } from "./store/store";

function App() {
  // redux dispatcher
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state) => state);

  // check user auth at first mount
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Layout>
          <Routes>
            {/* map on defined routes */}
            {routes.map((r) => (
              <Route key={r.id} path={r.path} element={<r.component />} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
