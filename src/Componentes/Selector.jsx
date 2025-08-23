import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GeneroPelisContext } from "../assets/Context/GeneroPelisContext";
import { useContext } from "react";
export default function Selector({ handleForm, formulario }) {
  const { generos } = useContext(GeneroPelisContext);
  // const [x, setx] = useState();
  // const handle = ({ target }) => {
  //   setx(target.value);
  // };
  // console.log(x);
  if (!generos.genres) {
    return (
      <FormControl variant="filled" sx={{ minWidth: 120 }}>
        <InputLabel>Cargando...</InputLabel>
        <Select
          name="genero"
          value={""} // Establece un valor por defecto para evitar errores
          disabled
        >
          <MenuItem value="">Cargando géneros...</MenuItem>
        </Select>
      </FormControl>
    );
  }

  return (
    <FormControl
      variant="filled"
      sx={{
        width: "300px",
        marginLeft: 2.5,
        minWidth: 120,
        "& .MuiFilledInput-root": {
          backgroundColor: "rgba(20, 20, 20, 0.9)",
          borderRadius: "6px",
          color: "#f5f5f5",
          border: "3px solid rgba(255, 0, 0, 0.7)",
          boxShadow:
            "0 0 10px rgba(255, 0, 0, 0.6), 0 0 20px rgba(255, 0, 0, 0.5), 0 0 40px rgba(255, 0, 0, 0.4)",
          "&:hover": {
            boxShadow:
              "0 0 15px rgba(255, 0, 0, 0.8),0 0 30px rgba(255, 0, 0, 0.6),0 0 60px rgba(255, 0, 0, 0.5)",
            border: "3px solid rgba(255, 0, 0, 1)",
          },
        },

        "& .MuiFilledInput-root:hover": {
          backgroundColor: "rgba(40, 40, 40, 0.95)",
        },

        "& .MuiInputBase-input": {
          fontSize: "20px",
          color: "#ffffff",
        },

        "& .MuiInputLabel-root": {
          fontSize: "18px",
          color: "#e0dbc4ff",
        },

        "& .MuiFormHelperText-root": {
          color: "#ecc9c9ff",
          fontSize: "15px",
        },
        // Añade el estilo para el icono de la flecha
        "& .MuiSelect-icon": {
          color: "#e0dbc4ff", // Mismo color dorado que el label
        },
      }}
    >
      <InputLabel id="demo-simple-select-filled-label">Género</InputLabel>
      <Select
        name="genero"
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={formulario.genero}
        onChange={(e) => {
          const { name, value } = e.target;
          handleForm({ target: { name, value } });
        }}
      >
        <MenuItem value="">Ninguno</MenuItem>
        {generos.genres.map((genero) => (
          <MenuItem key={genero.id} value={genero.id}>
            {genero.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
