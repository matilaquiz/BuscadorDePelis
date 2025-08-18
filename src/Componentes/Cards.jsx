import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards({ titulo, descripcion, imagen = "hola" }) {
  return (
    <Card
      sx={{
        width: 350,
        marginTop: 5,
        border: "3px solid rgba(0, 255, 255, 0.8)",
        boxShadow:
          "0 0 10px rgba(0, 255, 255, 0.8),0 0 20px rgba(0, 255, 255, 0.6),0 0 40px rgba(0, 255, 255, 0.4)" /* halo más difuso */,

        "&:hover": {
          boxShadow: "none",
          border: "3px solid rgba(0, 255, 255, 1)", // borde más brillante al hover
        },
      }}
    >
      <CardMedia
        sx={{ height: 450, width: 350 }}
        image={`https://image.tmdb.org/t/p/w500${imagen}`}
        title={imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {descripcion}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
