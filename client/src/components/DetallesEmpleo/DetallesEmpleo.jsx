import { Grid, Typography, Button, Paper } from "@mui/material";


export default function DetallesEmpleo({ empleo, empleo2 },{selectSuscrito}) {


  function handleClick() {
    selectSuscrito(true)
  }

  return (

    <Paper elevation={2}>
      <Grid container>
        <Grid container item xs={6}>
          <Grid item xs={12}>
            <Typography>
              {empleo?.descripcion || empleo2?.descripcion}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {empleo?.jornadas || empleo2?.jornadas}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {empleo?.salario || empleo2?.salario}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {empleo?.vacante || empleo2?.vacante}
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={6} p={2}>
          <Grid item xs={12}>
            <Typography>
              {empleo?.direccion || empleo2?.direccion}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" onClick={handleClick}>
              Suscribirse
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
