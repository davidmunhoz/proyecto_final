import { Button, Grid, Paper, Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

export default function PerfilCard({ empleos }) { 

  return (
    empleos.map((empleo, index)=>(
    <Paper elevation={2} key={index}>
      <Grid container item xs={9}>
        <Grid item xs={6}>
          <img src={`../../../public/especialidad/${empleo.especialidad}.jpg`} height={95} alt="imagen" />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6">{empleo?.titulo}</Typography>
        </Grid>

        <Grid container item xs={12} p={2}>
          <Grid item xs={3}>
            <DensityMediumIcon />
            <Typography variant="body3">{empleo?.tipotrabajo}</Typography>
          </Grid>

          <Grid item xs={3}>
            <DensityMediumIcon />
            <Typography variant="body3">{empleo?.especialidad}</Typography>
          </Grid>

          <Grid  item xs={6} justifyContent="end" alignItems="center">
        <Button variant="contained" color="primary">
        En trámite
        </Button>
      </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Typography variant="body3">Publicado: {empleo?.fecha}</Typography>
          </Grid>
        </Grid>
      </Grid>
      </Paper>
    ))
    
  );
}
