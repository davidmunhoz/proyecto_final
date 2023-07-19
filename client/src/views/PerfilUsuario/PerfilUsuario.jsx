import { Grid, Typography, Box } from "@mui/material";
import mariachi from "../../assets/mariachi.jpg";

export default function PerfilUsuario() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        item
        xs={6}
        p={4}
        border={1}
        borderColor={"#5C8D3A"}
        borderRadius={2}
        my={20}
      >
        <Grid container item xs={12}>
          <Grid item xs={12}>
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
            <Grid item xs={12}>
              <Typography>Carnet</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Vehiculo</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Fecha</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Typography>Habilidades</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography>Aqui va los empleos seleccionados</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}