import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Principal from "./Componentes/Principal";
import GeneroPelisProvider from "./assets/Context/GeneroPelisProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneroPelisProvider>
      <Principal></Principal>
    </GeneroPelisProvider>
  </StrictMode>
);
