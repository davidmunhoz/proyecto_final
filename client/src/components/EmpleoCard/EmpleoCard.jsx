import { useState, useEffect } from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import DetallesEmpleo from "../DetallesEmpleo/DetallesEmpleo";

import aceituna from '../../assets/aceituna.jpg'


export default function EmpleoCard({provincia}) {
  const [click, setClick] = useState(false);
  const [empleo, setEmpleo] = useState("");

  


  function handleClick() {
    setClick(!click);
  }

 
  useEffect(() => {
    async function empleoFetch(){
      try {
        const response = await fetch(`http://localhost:3001/employment/get/${provincia}`);
        const data = await response.json();
        setEmpleo(data.employment[0]);

      } catch (error) {
        console.error("Error fetching empleoData:", error);
      }
    }
    empleoFetch();
  }, [provincia]);

  return (
    <Paper elevation={2}>
      <Grid container>
        <Grid container item xs={3}>
          <img src={aceituna} height={95} alt="imagen" />
        </Grid>

        <Grid container item xs={9}>
          <Grid item xs={12}>
            <Typography variant="h6">{empleo?.titulo}</Typography>
          </Grid>

          <Grid container item xs={12} p={2}>
            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleo?.tipotrabajo}</Typography>
            </Grid>

            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleo?.especialidad}</Typography>
            </Grid>

            <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleClick}
              >
                {click ? "Ocultar" : "Ver"}
              </Button>
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="body3">Publicado: 15/01/2023</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {click && <DetallesEmpleo empleo={empleo} />}
    </Paper>
  );
}