import { Grid, Typography } from "@mui/material";
import mariachi from "../../assets/mariachi.jpg"

export default function PerfilUsuario() {


  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item xs={12} >
          <img src={mariachi} alt="nimodo" height="120" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Nombre</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid container item xs={4}>
            <Grid item xs={12}>
                <Typography>Experiencia</Typography>
            </Grid>
            <Grid item xs={12}><Typography>
                Carnet
                </Typography></Grid>
            <Grid item xs={12}><Typography>
                  Vehiculo
                </Typography></Grid>
            <Grid item xs={12}><Typography>
                Fecha
                </Typography></Grid>
        </Grid>
        <Grid container item xs={8}>
            <Grid item xs = {12}>
                <Typography>
                  Habilidades
                </Typography>
            </Grid>
        </Grid>
<Grid item xs={12}>
    <Typography>Aqui va los empleos seleccionados</Typography>
</Grid>
      </Grid>
    </Grid>
  )
  }