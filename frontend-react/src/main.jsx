import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router/Router";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
