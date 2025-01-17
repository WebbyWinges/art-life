import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { AuthProvider } from "./hooks/useAuth";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  </Provider>,
);
