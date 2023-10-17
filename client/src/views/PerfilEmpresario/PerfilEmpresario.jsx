import  { useState } from "react";
import { Grid, Typography, Tab, Box, Button } from "@mui/material";
import { useAuthContext } from "../../components/contexts/AuthContext";
import LocationIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import Empleos from './Empleos/Empleos';
import Solicitudes from './Solicitudes/Solicitudes';
import imagenPanel from "../../../public/imageView/panelEmpresario3.png"
import Phone from '@mui/icons-material/PhoneAndroid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel  from '@mui/lab/TabPanel';


export default function PerfilEmpresario() {
  const [value, setValue] = useState('1');
  // const [trueSolicitud, setTrueSolicitud] = useState(false);
  console.log(value)

//   function SolicitudTrue(){
// setTrueSolicitud(true)
//   }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { userEmpresario } = useAuthContext();
  console.log(userEmpresario)

  return (
    <Grid container sx={{ border:"2px solid black"}}>

      <Grid item xs={12}>
        {/* Imagen del Panel */}
        <Grid container>
          <Grid item xs={12}>
            <img src={imagenPanel} style={{ width: "100%",    borderTopColor: "black",borderRightColor: "Black", borderLeftColor:"black"  }} alt="Imagen del Panel" />
          </Grid>
        </Grid>

        {/* Info del Empresario */}
        <Grid container sx={{pl:40, pt:1,mb:2}}>
        <Grid item xs={10} sx={{pl:60}}>
          <Button variant="contained" startIcon={<EditIcon/>}>EDITAR USUARIO</Button>
        </Grid>
          <Grid item xs={10}>
            <Typography variant="h4">{userEmpresario.nombre}</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">
              <LocationIcon />
              {userEmpresario.direccion}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">
              <b>CIF:</b>
              {userEmpresario.cif}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">
              <Phone />
              {userEmpresario.telefono}
            </Typography>
          </Grid>
        </Grid>

        {/* EMPLEOS */}
        <Grid container >
{/* TAB ELEGIR ENTRE SOLICITUDES Y EMPLEO*/ }
          <Grid item xs={12}>
          <TabContext value={value} >
  <Box   sx={{
    pl: 30
  }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example" component="div">
      <Tab label="Solicitudes de Empleo" value="1" sx={{ fontSize: '1.5rem',}} />
      <Tab label="Ofertas de Empleo" value="2" sx={{ fontSize: '1.5rem' }}/>
    </TabList>
  </Box>

  <TabPanel value="1">
  <Box width={"75%"} sx={{pl:16,pt:2}}><Solicitudes empresario={userEmpresario}  /></Box>
  </TabPanel>
  <TabPanel value="2">
  <Box width={"75%"} sx={{pl:16,pt:2}}><Empleos empresario={userEmpresario}/></Box>
  </TabPanel>

    </TabContext>
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
}
