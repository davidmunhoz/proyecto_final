import { useEffect,useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useAuthContext } from "../../components/contexts/AuthContext";
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import HorizontalDivider from "../../components/Divider/HorizontalDivider";
import VerticalDivider from "../../components/Divider/VerticalDivider";


export default function PerfilTrabajador(){
  const [solicitud, setSolicitud] = useState("");
  console.log(solicitud)
  const [empleo, setEmpleo] = useState("");

    const { userTrabajador } = useAuthContext()
    const trabajador = userTrabajador.user[0]
console.log(trabajador)

useEffect(() => {
  async function fetchSolicitud() {
    try {
      const response = await fetch(`http://localhost:3001/employment/getid/${trabajador.id}`);
      const data = await response.json();
      setSolicitud(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchSolicitud();
}, [trabajador]);


useEffect(() => {
  async function fetchEmpleo() {
    try {
      const response = await fetch(`http://localhost:3001/empleo/get/${solicitud.empleo}`);
      const data = await response.json();
      console.log(data)
      setEmpleo(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchEmpleo()
})


    return(
        <Grid container>
            <Grid container item xs={12} >
                <Typography variant="h2">Mi Perfil</Typography>
            </Grid>
            

            <Grid container item xs={12}>
            <Grid item xs={12}>
            <img src={trabajador?.imagen} alt="imagen de perfil" style={{width:"200px", height:"200px", borderRadius:"50%"}}/>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h5">{trabajador?.nombre}</Typography>
            </Grid>
            </Grid>
            <HorizontalDivider/>

            <Grid container item xs={12}>
              <Grid item xs={6}>
              <Typography variant="body2">{trabajador?.direccion}</Typography>
              <Typography variant="body2">{trabajador?.telefono}</Typography>
              {trabajador?.carnet ? <div><CheckBoxIcon/> <Typography variant="body2">Carnet</Typography></div> : <div><CheckBoxOutlineBlankIcon/> <Typography variant="body2"> Carnet</Typography></div>}
              {trabajador?.coche ? <div><CheckBoxIcon/> <Typography variant="body2">Coche</Typography></div> : <div><CheckBoxOutlineBlankIcon/> <Typography variant="body2"> Coche</Typography></div>}
              </Grid>
              <VerticalDivider/>

              <Grid item xs={6}>
                <Typography variant="body1">{trabajador?.experiencia}</Typography>
              </Grid>
              <HorizontalDivider/>

              <Grid item xs={12}>
                <Typography variant="body1"> {empleo[0]?.titulo}</Typography>
                <Typography variant="body1"> {empleo[1]?.titulo}</Typography>
              </Grid>
            </Grid>

        </Grid>
    )
}