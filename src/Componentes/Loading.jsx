import React from "react";
import { CircularProgress } from "@mui/material";
export default function Loading() {
  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <CircularProgress color="primary" />
        <p>Cargando datos...</p>
      </div>
    </div>
  );
}
