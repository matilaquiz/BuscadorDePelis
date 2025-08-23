import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function useFetchPelis({ nombre, genero }) {
  const url = "https://api.themoviedb.org/3/search/movie";
  const apiKey = import.meta.env.VITE_API_KEY;
  const [peliculas, setPeliculas] = useState([]);
  const [errorFetch, setErrorFetch] = useState("");
  const [loading, setLoading] = useState(false);
  const [noPelis, setNopelis] = useState(false);

  useEffect(() => {
    if (nombre === undefined) return;
    const fetchPelis = async () => {
      setLoading(true);
      if (nombre === "") {
        setErrorFetch("No se ingreso ningun nombre");
        setLoading(false);
        return;
      }
      try {
        const resp = await axios.get(url, {
          params: {
            api_key: apiKey,
            query: nombre,
            // year: año,
            language: "es-ES", // opcional, para traer en español
          },
        });
        const pelis = resp.data.results;

        setLoading(false);
        setPeliculas(pelis);
        setErrorFetch("");
        setNopelis(pelis.length === 0 ? true : false);
      } catch (e) {
        setErrorFetch("Error en el servidor: ", e.msj);
        setLoading(false);
      }
    };

    fetchPelis();
  }, [nombre]);

  return { peliculas, errorFetch, loading, noPelis };
}
