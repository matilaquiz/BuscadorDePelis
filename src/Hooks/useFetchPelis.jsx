import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function useFetchPelis({ nombre, año }) {
  const url = "https://api.themoviedb.org/3/search/movie";
  const apiKey = "728cf9d4b04dc32c7af1ce0b10384611";
  const [peliculas, setPeliculas] = useState([]);
  const [errorFetch, setErrorFetch] = useState("");

  useEffect(() => {
    const fetchPelis = async () => {
      if (nombre === "") {
        setErrorFetch("no se lleno el nombre");
        return;
      }
      try {
        const resp = await axios.get(
          `${url}?api_key=${apiKey}&query=${nombre}`
        );
        const pelis = resp.data.resutls;
        setPeliculas(pelis);
      } catch (e) {
        setErrorFetch(e);
      }
    };

    fetchPelis();
  }, [nombre]);

  return { peliculas, errorFetch };
}
