import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/Style.css";
import useForm from "../Hooks/useForm";
import useFetchPelis from "../Hooks/useFetchPelis";
import { useState } from "react";
import Cards from "./Cards";
import { Alert, Stack } from "@mui/material";
import Loading from "./Loading";
import { GeneroPelisContext } from "../assets/Context/GeneroPelisContext";
import Select from "./Selector";

export default function Principal() {
  const { generos } = useContext(GeneroPelisContext);
  const [query, setQuery] = useState({});
  const initialValue = {
    nombre: "",
    genero: "",
  };
  const { formulario, error, handleForm } = useForm(initialValue);
  console.log(generos);
  const search = (e) => {
    e.preventDefault();
    if (error) return;
    setQuery(formulario);
  };

  const { peliculas, errorFetch, loading } = useFetchPelis(query);

  return (
    <div className="Principal">
      {/* 🎥 Video de fondo */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/fondo-peli.mp4" type="video/mp4" />
      </video>
      <div className="Contenido">
        <form className="Buscador" onSubmit={search}>
          <TextField
            name="nombre"
            label="Nombre de la película que buscas"
            variant="filled"
            value={formulario.nombre}
            onChange={handleForm}
            helperText={error ? error : "Que pelicula queres encontrar"}
            error={Boolean(error)}
            sx={{
              width: "400px",

              "& .MuiFilledInput-root": {
                backgroundColor: "rgba(20, 20, 20, 0.9)", // Fondo oscuro
                borderRadius: "6px",
                color: "#f5f5f5", // Texto blanco
                border: "3px solid rgba(255, 0, 0, 0.7)",
                boxShadow:
                  "0 0 10px rgba(255, 0, 0, 0.6), 0 0 20px  rgba(255, 0, 0, 0.5), 0 0 40px rgba(255, 0, 0, 0.4)" /* halo más difuso */,

                "&:hover": {
                  boxShadow:
                    "0 0 15px rgba(255, 0, 0, 0.8),0 0 30px rgba(255, 0, 0, 0.6),0 0 60px rgba(255, 0, 0, 0.5)",
                  border: "3px solid rgba(255, 0, 0, 1)", // borde más brillante al hover
                },
              },

              "& .MuiFilledInput-root:hover": {
                backgroundColor: "rgba(40, 40, 40, 0.95)", // Hover
              },

              "& .MuiInputBase-input": {
                fontSize: "20px",
                color: "#ffffff", // Texto que escribe el usuario
              },

              "& .MuiInputLabel-root": {
                fontSize: "18px",
                color: "#e0dbc4ff", // Dorado tipo cine
              },

              "& .MuiFormHelperText-root": {
                color: "#ecc9c9ff", // Mensaje de error en rojo cine
                fontSize: "15px",
              },
            }}
          ></TextField>
          <Button
            className="boton"
            type="submit"
            sx={{
              height: "65px",
              background: "rgba(255, 0, 0, 0.8)",
              marginLeft: "20px",
              color: "white",
              border: "3px solid rgba(255, 0, 0, 0.7)",
              boxShadow:
                "0 0 10px rgba(255, 0, 0, 0.6), 0 0 20px  rgba(255, 0, 0, 0.5), 0 0 40px rgba(255, 0, 0, 0.4)" /* halo más difuso */,

              "&:hover": {
                boxShadow: "none",
                border: "3px solid rgba(255, 0, 0, 1)", // borde más brillante al hover
              },
            }}
          >
            Buscar Película
          </Button>
          <Select handleForm={handleForm} formulario={formulario}></Select>
        </form>
        <div className="cartelera">
          {loading && <Loading></Loading>}
          {errorFetch && (
            <Stack sx={{ width: "70%", marginTop: "40px" }} spacing={2}>
              <Alert
                severity="error"
                sx={{
                  background: "rgba(255, 0, 0,0.5)",
                  fontSize: "25px",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "1px solid rgba(255, 0, 0, 0.7)", // borde sutil
                  "& .MuiAlert-icon": {
                    color: "#fff", // Ícono blanco
                  },
                }}
              >
                {errorFetch}
              </Alert>
            </Stack>
          )}
          {!errorFetch &&
            peliculas.length === 0 &&
            formulario.nombre === "" && (
              <Stack
                sx={{ width: "50%", marginTop: "40px", height: "250px" }}
                spacing={2}
              >
                <Alert
                  variant="filled"
                  severity="success"
                  sx={{
                    height: "100%",
                    background: "rgba(99, 158, 126, 0.3)",
                    fontSize: "25px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "1px solid rgba(69, 161, 111, 0.7)", // borde sutil
                    "& .MuiAlert-icon": {
                      color: "#fff", // Ícono blanco
                    },
                  }}
                >
                  Gracias por elegirnos!!
                  <br /> Aqui encontraras tus peliculas favoritas
                </Alert>
              </Stack>
            )}
          {!errorFetch &&
            peliculas.length === 0 &&
            formulario.nombre !== "" && (
              <Stack
                sx={{ width: "50%", marginTop: "40px", height: "250px" }}
                spacing={2}
              >
                <Alert
                  variant="filled"
                  severity="success"
                  sx={{
                    height: "100%",
                    background: "rgba(99, 158, 126, 0.3)",
                    fontSize: "25px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "1px solid rgba(69, 161, 111, 0.7)", // borde sutil
                    "& .MuiAlert-icon": {
                      color: "#fff", // Ícono blanco
                    },
                  }}
                >
                  No se encontro la pelicula que buscabas
                  <br />
                  Trata de acordarte bien!!
                </Alert>
              </Stack>
            )}
          {!loading &&
            !errorFetch &&
            peliculas?.length > 0 &&
            peliculas.map((peli) => (
              <Cards
                titulo={peli.title}
                descripcion={peli.overview}
                imagen={peli.poster_path}
                key={peli.id}
              ></Cards>
            ))}
        </div>
      </div>
    </div>
  );
}
