import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useAuthContext } from "../../components/contexts/AuthContext";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import HorizontalDivider from "../../components/Divider/HorizontalDivider";
import PerfilCard from "../../components/EmpleoCard/PerfilCard/PerfilCard";
import VerticalDivider from './../../components/Divider/VerticalDivider';
import imagenMuleta from "../../../public/assets/mariachi.jpg"

export default function PerfilTrabajador() {
  const [solicitud, setSolicitud] = useState("");
  const [solicitud2, setSolicitud2] = useState("");
  const [empleo, setEmpleo] = useState("");
  const [empleo2, setEmpleo2] = useState("");
  const { userTrabajador } = useAuthContext();
  const trabajador = userTrabajador.user[0];

  useEffect(() => {
    async function fetchSolicitud() {
      try {
        const response = await fetch(`http://localhost:3001/application/getTrabajador/${trabajador.id}`);
        const data = await response.json();
        setSolicitud(data.application[0]);
        setSolicitud2(data.application[1]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSolicitud();
  }, [trabajador]);

  useEffect(() => {
    async function fetchEmpleo() {
      try {
        const response = await fetch(`http://localhost:3001/employment/getid/${solicitud.empleo}`);
        const data = await response.json();
        setEmpleo(data.employment[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmpleo();

    async function fetchEmpleo2() {
      try {
        const response = await fetch(`http://localhost:3001/employment/getid/${solicitud.empleo2}`);
        const data = await response.json();
        setEmpleo2(data.employment[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmpleo2();
  }, [solicitud, solicitud2]);

  return (
    <Grid container>
       <Grid container justifyContent="center" alignItems="center" style={{ height: "10vh" }}>
        <Typography variant="h2">Mi Perfil</Typography>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <img src={imagenMuleta} alt="imagen de perfil" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">{trabajador?.nombre}</Typography>
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

      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <PerfilCard empleo={empleo} />
          </Grid>
        </Grid>
        {/* Agregar el otro PerfilCard aquí si es necesario */}
      </Grid>
    </Grid>
  );
}
