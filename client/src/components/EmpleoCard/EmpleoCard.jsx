import { useState, useEffect } from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import DetallesCard from "../DetallesEmpleo/DetallesEmpleo";
import aceituna from "../../assets/aceituna.jpg";

export default function HomeCard() {
  const [click, setClick] = useState(false);
  const [empleoData, setEmpleoData] = useState(null);

  function handleClick() {
    setClick(!click);
  }

  useEffect(() => {
    async function empleoFetch() {
      try {
        const response = await fetch("http://localhost:3001/employment/get");
        const data = await response.json();
        setEmpleoData(data);
      } catch (error) {
        console.error("Error fetching empleoData:", error);
      }
    }

    empleoFetch();
  }, []);

  return (
    <Paper elevation={2}>
      <Grid container>
        <Grid container item xs={3}>
          <img src={aceituna} height={95} alt="Aceituna" />
        </Grid>

        <Grid container item xs={9}>
          <Grid item xs={12}>
            <Typography variant="h6">{empleoData?.titulo}</Typography>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleoData?.tipotrabajo}</Typography>
            </Grid>

            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleoData?.especialidad}</Typography>
            </Grid>

            <Grid item xs={4}>
              <Button
                variant="contained"
                size="small"
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

      {click && <DetallesCard />}
    </Paper>
  );
}