import { Button, Grid,Typography} from "@mui/material";
import {useState} from "react";
import { useAuthContext } from "../../components/contexts/AuthContext";
import HorizontalDivider from "../../components/Divider/HorizontalDivider";
import imagenEmpresario from "../../../public/assets/empresario.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Empleos from './Empleos/Empleos';
import Solicitudes from './Solicitudes/Solicitudes';


export default function PerfilEmpresario(){
    const [empleos, setEmpleos] = useState("")
    const [solicitudes, setSolicitudes] = useState("")

    function handleEmpleo(){
        setEmpleos(true)
        setSolicitudes("")
    }
    function handleSolicitud(){
        setSolicitudes(true)
        setEmpleos("")
    }

    const { userEmpresario } = useAuthContext()
    const empresario = userEmpresario.user[0]
console.log(empresario);


    return(
        <Grid container>
       <Grid container justifyContent="center" alignItems="center" style={{ height: "10vh" }}>
        <Typography variant="h2">Mi Perfil</Typography>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={6}>
          <img src={imagenEmpresario} alt="imagen de perfil" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">{empresario?.nombre}</Typography>
          <br/><br/>
          <LocationOnIcon/>
          <Typography variant="h5">{empresario?.direccion}</Typography>
        </Grid>

        <Grid item xs={12}>
        <Grid>   <Button onClick={handleEmpleo} variant="contained">Empleos</Button> </Grid>
        <Grid>   <Button onClick={handleSolicitud} variant="contained">Solicitud</Button> </Grid>
        </Grid>
        <HorizontalDivider/>
        </Grid>

        <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography variant="body2">{empresario?.cif}</Typography>
          <Typography variant="body2">{empresario?.descripcion}</Typography>
        </Grid>
        <Grid item xs={6}>
        {empleos && (<Empleos/>)}
        {solicitudes && (<Solicitudes/>)}
        </Grid>
      </Grid>
    </Grid>
        
    )
}