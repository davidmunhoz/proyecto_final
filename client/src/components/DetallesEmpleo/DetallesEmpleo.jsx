import { Grid, Typography, Button, Paper } from "@mui/material";
export default function DetallesCard() {
  return (
    <Paper elevation={2}>
    <Grid container>
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Typography>
            Descripcion
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            NºJornadas
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Sueldo/hora
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Trabajadores necesarios
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Typography>Fecha</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Suscribirse</Button>
        </Grid>
      </Grid>
    </Grid>
    </Paper>
  );
}