// css
import "./App.css";
// rrd
import { BrowserRouter, Route, Routes } from "react-router-dom";
// route
import { routes } from "./routes/route";
// layout
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
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
