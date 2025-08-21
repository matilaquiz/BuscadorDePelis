import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function useFectchGenero() {
  const [generos, setGeneros] = useState([]);

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetch = async () => {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=es-ES`
      );
      setGeneros(resp.data);
    };
    fetch();
  }, []);

  return { generos };
}
