import { Grid,Typography, Button, Divider} from "@mui/material";
import { useAuthContext } from "../../components/contexts/AuthContext";
import LocationIcon from '@mui/icons-material/LocationOn';
import Empleos from './Empleos/Empleos';
import Solicitudes from './Solicitudes/Solicitudes';
import imagenPanel from "../../../public/imageView/panelEmpresario.jpg"
import Phone from '@mui/icons-material/PhoneAndroid';
import {useNavigate } from "react-router-dom";
import  AddIcon  from '@mui/icons-material/Add';


export default function PerfilEmpresario(){
  const navigate = useNavigate();

    const { userEmpresario } = useAuthContext()
    const empresario = userEmpresario.user[0]
    console.log(empresario)

    return(
  
        <Grid container>
          <Grid item xs={8}>
            {/* Imagen del Panel */}
            <Grid container>
              <Grid item xs={12}>
                <img src={imagenPanel} style={{ width: "100%" }} alt="Imagen del Panel" />
              </Grid>
            </Grid>
      
            {/* Info del Empresario */}
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h4">{empresario.nombre}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">
                  <LocationIcon />
                  {empresario.direccion}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">
                  <b>CIF:</b>
                  {empresario.cif}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">
                  <Phone />
                  {empresario.telefono}
                </Typography>
              </Grid>
            </Grid>
      
            {/* EMPLEOS */}
            <Grid container>
              <Grid item xs={12} sx={{ pt: 2 }}>
                <Typography variant="h4" sx={{ pl: 2 }}>
                  Gestiona tu Empleo
                </Typography>
                <Divider sx={{ borderBottom: '3px solid #000' }} />
              </Grid>

              <Grid item xs={8} sx={{ p: 2 }}>
              <Button
          component="label"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            navigate("/empleo");
          }}
        >
          Añadir Empleo
        </Button>
              </Grid>

             {/*Empleo */}
              <Grid item xs={12}>
                <Empleos empresario={empresario}/>
              </Grid> 
            </Grid>
          </Grid>
      
          {/* SOLICITUDES */}
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={12} sx={{ pt: 2 }}>
                <Typography variant="h4">Gestiona tus solicitudes de Empleo</Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid  item xs={12} sx={{p:1}}>
              <Solicitudes empresario={empresario}/>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      
    )
}
    