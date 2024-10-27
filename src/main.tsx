import ReactDOM from "react-dom/client";
// css
import "./index.css";
// app entry
import App from "./App.tsx";
// store
import { store } from "./store/store.ts";
// redux
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./constant/queryClient.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>

  <Provider store={store}>
    <App />
  </Provider>
</QueryClientProvider>
);
