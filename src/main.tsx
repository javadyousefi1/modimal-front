import ReactDOM from "react-dom/client";
// css
import "./index.css";
// app entry
import App from "./App.tsx";
// store
import { store } from "./store/store.ts";
// redux
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
