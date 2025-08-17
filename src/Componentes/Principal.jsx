import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/Style.css";
import useForm from "../Hooks/useForm";
export default function Principal() {
  const initialValue = {
    nombre: "",
    año: "",
  };
  const { formulario, error, handleForm } = useForm(initialValue);

  return (
    <div className="Principal">
      <div className="Contenido">
        <form className="Buscador">
          <TextField
            name="nombre"
            label="Nombre de la película que busacas"
            variant="filled"
            value={formulario.nombre}
            onChange={handleForm}
            helperText={error ? error : "Que peli queres ver"}
            error={Boolean(error)}
            sx={{
              height: "60px",
              width: "350px",
              "& .MuiInputBase-input": {
                fontSize: "20px", // tamaño del texto que escribe el usuario
              },
              "& .MuiInputLabel-root": {
                fontSize: "18px", // tamaño del label
              },
            }}
          ></TextField>
          <Button
            sx={{
              height: "60px",
              background: "red",
              marginLeft: "20px",
            }}
          >
            Buscar Película
          </Button>
        </form>
      </div>
    </div>
  );
}
