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
// antd
import { ConfigProvider } from "antd";

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
      {" "}
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "var(  --color-primary-800  )",
            // borderRadius: 2,
            // Alias Token
            // colorBgContainer: "#f6ffed",
          },
        }}
      >
        {" "}
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
      </ConfigProvider>
    </>
  );
}

export default App;
