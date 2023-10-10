import { useEffect, useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { useAuthContext } from "../../components/contexts/AuthContext";
import PerfilCard from "../../components/EmpleoCard/PerfilCard/PerfilCard";
import imagenMuleta from "../../../public/assets/mariachi.jpg"
import LocationIcon from '@mui/icons-material/LocationOn';
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import CarnetIcon from '@mui/icons-material/CreditScore';

export default function PerfilTrabajador() {
  const [empleos, setEmpleos] = useState("");
  console.log(empleos)
  const { userTrabajador } = useAuthContext();
  const trabajadorID = userTrabajador.id;

  useEffect(() => {
    async function fetchEmpleo() {
      try {
        const response = await fetch(`https://localhost:3001/getbyTrabajador/${trabajadorID}}`);
        const data = await response.json();
        setEmpleos(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmpleo();

  }, [trabajadorID]);

  return (
    <Grid container>
      <Grid item xs={12}>

      <Grid container sx={{pl:50}}>
      <Grid item xs={12} sx={{p:1, pl:2}}>
        <Typography variant="h2" >Perfil</Typography>
      </Grid>
        <Grid item xs={12}>
        <img src={imagenMuleta} style={{borderRadius:"50%", overflow:"hidden",width:"20%"}}/>
        </Grid>

        <Grid item xs={12}>
        <Typography variant="h4">{trabajador?.nombre}</Typography>
        </Grid>

      </Grid>
      <Divider sx={{ borderBottom: "2px solid black" }} />
      </Grid>
   
      <Grid item xs={4} sx={{borderRight: "3px solid black" }}>
      <Grid container>
      <Grid item xs={10} sx={{p:1}}>
      <Typography variant="h5"><LocationIcon sx={{pr:1}}/>{trabajador?.direccion}</Typography>
      </Grid>
      <Grid item xs={10} sx={{p:1}}>
      <Typography variant="h5"><PhoneAndroid sx={{pr:1}}/>{trabajador?.telefono}</Typography>
      </Grid>
      <Grid item xs={8} sx={{p:1}}>
        { trabajador.carnet === 1 ? (<Typography><CarnetIcon sx={{pr:1}}/>Tienes Carnet</Typography>): (<Typography><CarnetIcon sx={{pr:1}}/>No tienes Carnet</Typography>)}
      </Grid>
      <Grid item xs={8} sx={{p:1}}>
      { trabajador.coche === 1 ? (<Typography><DirectionsCar sx={{pr:1}}/>Tienes Coche</Typography>): (<Typography><DirectionsCar sx={{pr:1}}/>No tienes Coche</Typography>)}
      </Grid>

      </Grid>
      </Grid>

      <Grid item xs={8}>
      {/* Descripción */}
      <Grid container sx={{p:1, pl:2}}>
      <Grid item xs={12}>
          <Typography variant="h4">{trabajador?.experiencia}</Typography>
        </Grid>
      </Grid>

      {/* Empleo */}
      <Grid container>
        <Grid item xs={12}>
          <PerfilCard empleos={empleos}/>
        </Grid>
      </Grid>
      </Grid>

     
    </Grid>
  );
}
