import { Tabs, Tab, Grid,Typography} from "@mui/material";
import {useState,useEffect} from "react";
import { useAuthContext } from "../../components/contexts/AuthContext";
import HorizontalDivider from "../../components/Divider/HorizontalDivider";
import imagenEmpresario from "../../../public/assets/empresario.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Empleos from './Empleos/Empleos';
import Solicitudes from './Solicitudes/Solicitudes';


export default function PerfilEmpresario(){

    const [solicitud, setSolicitud] = useState("");
    const [trabajador, setTrabajador] = useState("");
    const [empleo, setEmpleo] = useState("");
    const [empleo2, setEmpleo2] = useState("");

    const [solicitudes, setSolicitudes] = useState("")
    console.log(solicitud)
    console.log(solicitudes)
    const { userEmpresario } = useAuthContext()
    const empresario = userEmpresario.user[0]
    const empresarioID = empresario.id
    const trabajadorID = solicitud.trabajador
    
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
      setTabValue(newValue);
    };

console.log(trabajador)
    useEffect(() => {
      async function fetchEmpleo() {
        try {
          const response = await fetch(`http://localhost:3001/employment/getEmpresario/${empresarioID}`);
          const data = await response.json();
          console.log(data)
          setEmpleo(data.employment[0]);
          setEmpleo2(data.employment[1]);
        } catch (error) {
          console.error(error);
        }
      }
      fetchEmpleo();

      async function fetchSolicitud() {
        try {
          const response = await fetch(`http://localhost:3001/application/getEmpresario/${empresarioID}`);
          const data = await response.json();
          console.log(data)
          setSolicitudes(data.application);
          setSolicitud(data.application[0]);
        } catch (error) {
          console.error(error);
        }
      }
      fetchSolicitud();


      async function fetchTrabajador() {
        try {
          const response = await fetch(`http://localhost:3001/user/get/${trabajadorID}`);
          console.log(response)
          const data = await response.json();
          console.log(data)
          setTrabajador(data.trabajador);
        } catch (error) {
          console.error(error);
        }
      }
      fetchTrabajador();
    }, [empresarioID,trabajadorID]);


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
          <Typography variant="h5"><LocationOnIcon/>{empresario?.direccion}</Typography>
        </Grid>

        <Grid item xs={12}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Empleos" value={0} />
          <Tab label="Solicitudes" value={1} />
        </Tabs>
        </Grid>
<HorizontalDivider/>
        <Grid container item xs={12}>
        <Grid item xs={6}>
        {tabValue === 0 && (<Empleos empleo={empleo} empleo2={empleo2} solicitudes={solicitudes} />)}
        {tabValue === 1 && trabajador.map((trabajadores, index) => (
  <Solicitudes key={index} trabajadores={trabajadores} />
))}
        </Grid>
      </Grid>
    </Grid>
    </Grid>
        
    )
}