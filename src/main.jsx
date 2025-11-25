import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/routes.jsx";
import AuthProvider from "./context/Authcontext/AuthProvider.jsx";
import { QueryClientProvider } from "@tanstack/react-query";

const 
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </QueryClientProvider>
  </AuthProvider>
);
