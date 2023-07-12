import { Grid, Typography, Button, Paper } from "@mui/material";


export default function DetallesEmpleo({empleo}) {
  return (
    <Paper elevation={2}>
    <Grid container >
    
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Typography>
            {empleo?.descripcion}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
           {empleo?.jornadas}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {empleo?.salario}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {empleo?.vacante}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={6} p={2}>
        <Grid item xs={12}>
          <Typography>{empleo?.direccion}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">Suscribirse</Button>
        </Grid>
      </Grid>
    </Grid>
    </Paper>
  );
}