import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Principal from "./Componentes/Principal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Principal></Principal>
  </StrictMode>
);
