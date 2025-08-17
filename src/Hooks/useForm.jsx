import React, { useState } from "react";

export default function useForm(initialValue) {
  const [formulario, setFormulario] = useState(initialValue);
  const [error, setError] = useState("");
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]{6,}$/;
  const regexAño = /^[0-9]{4}$/;

  const handleForm = (e) => {
    const { name, value } = e.target;
    if (validar(value, name) === false && name === "nombre") {
      setError("El nombre dbe tener mas de 5 letras");
    } else {
      setError("");
    }
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const validar = (value, name) => {
    const reglas = {
      nombre: regexNombre,
      año: regexAño,
    };

    return reglas[name].test(value) ?? false;
  };

  return {
    formulario,
    handleForm,
    error,
  };
}
