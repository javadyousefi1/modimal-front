// css
import "./App.css";
// rrd
import { BrowserRouter, Route, Routes } from "react-router-dom";
// route
import { routes } from "./routes/route";
// layout
import Layout from "./layout/Layout";
import { Toaster } from "react-hot-toast";

function App() {
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
