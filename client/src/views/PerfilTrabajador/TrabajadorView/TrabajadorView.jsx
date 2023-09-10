import { Grid, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import HorizontalDivider from "../../../components/Divider/HorizontalDivider";
import imagenMuleta from "../../../../public/assets/mariachi.jpg"
import { useLocation } from 'react-router-dom';


export default function TrabajadorView() {
  const location = useLocation();
  const trabajador = location.state.trabajador;


  return (
    <Grid container>
       <Grid container justifyContent="center" alignItems="center" style={{ height: "10vh" }}>
        <Typography variant="h2">{trabajador?.nombre}</Typography>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" item xs={12}>
        <Grid item xs={12}>
          <img src={imagenMuleta} alt="imagen de perfil" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
        </Grid>
      </Grid>
      <HorizontalDivider />

      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography variant="body2">{trabajador?.direccion}</Typography>
          <Typography variant="body2">{trabajador?.telefono}</Typography>
          {trabajador?.carnet ? (
            <div>
              <CheckBoxIcon /> <Typography variant="body2">Carnet</Typography>
            </div>
          ) : (
            <div>
              <CheckBoxOutlineBlankIcon /> <Typography variant="body2"> Carnet</Typography>
            </div>
          )}
          {trabajador?.coche ? (
            <div>
              <CheckBoxIcon /> <Typography variant="body2">Coche</Typography>
            </div>
          ) : (
            <div>
              <CheckBoxOutlineBlankIcon /> <Typography variant="body2"> Coche</Typography>
            </div>
          )}
        </Grid>
        <Grid item xs={6} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography variant="body1">{trabajador?.experiencia}</Typography>
        </Grid>
      </Grid>
      <HorizontalDivider />

    </Grid>
  );
}