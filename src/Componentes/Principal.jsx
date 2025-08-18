import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/Style.css";
import useForm from "../Hooks/useForm";
import useFetchPelis from "../Hooks/useFetchPelis";
import { useState } from "react";
export default function Principal() {
  const [query, setQuery] = useState({});
  const initialValue = {
    nombre: "",
    año: "",
  };
  const { formulario, error, handleForm } = useForm(initialValue);

  const search = (e) => {
    e.preventDefault();
    setQuery(formulario);
  };

  const { peliculas, errorFetch } = useFetchPelis(query);
  console.log(peliculas);
  return (
    <div className="Principal">
      <div className="Contenido">
        <form className="Buscador" onSubmit={search}>
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
            type="submit"
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
