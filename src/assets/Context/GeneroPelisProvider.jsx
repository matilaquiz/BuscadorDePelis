import React from "react";
import useFectchGenero from "../../Hooks/useFectchGenero";
import { GeneroPelisContext } from "./GeneroPelisContext";
export default function GeneroPelisProvider({ children }) {
  const { generos } = useFectchGenero();

  return (
    <GeneroPelisContext.Provider value={{ generos }}>
      {children}
    </GeneroPelisContext.Provider>
  );
}
