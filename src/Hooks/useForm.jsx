import React, { useState } from "react";

export default function useForm(initialValue) {
  const [formulario, setFormulario] = useState(initialValue);
  const [error, setError] = useState("");
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s.,;:!?¿¡'"()\-]{2,}$/;
  //   const regexAño = /^[0-9]{4}$/;

  const handleForm = (e) => {
    const { name, value } = e.target;
    if (validar(value, name) === false && name === "nombre") {
      setError("El nombre debe tener mas de 2 letras");
    } else {
      setError("");
    }
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const validar = (value, name) => {
    const reglas = {
      nombre: regexNombre,
    };

    return reglas[name].test(value) ?? false;
  };

  return {
    formulario,
    handleForm,
    error,
  };
}
