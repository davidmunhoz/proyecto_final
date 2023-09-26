import {Button, Grid, Typography } from "@mui/material";
import { useEffect,useState } from "react";
import {useLocation} from 'react-router-dom';
import LocationIcon from '@mui/icons-material/LocationOn';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useAuthContext } from "../../../components/contexts/AuthContext";

export default function EmpleoPerfil(){
    const [empresarioData, setEmpresarioData] = useState("");
    const {userTrabajador} = useAuthContext()
    const trabajadorID = userTrabajador._id
    const location = useLocation();
    const empleo = location.state.empleo
    const empresarioID = empleo.empresario

    const imagen = `../../../public/especialidad/${empleo?.especialidad}.jpg`
    console.log(empleo)

useEffect(() =>{
    async function empresarioFetch(){
        try {
            const response = await fetch(`http://localhost:3001/user/getEmpresario/${empresarioID}`);
            const data = response.json()
            console.log(data)
            setEmpresarioData(data)
        }catch(error){
            console.log(error)
        }
    }
    empresarioFetch()
},[empresarioID])


     async function handlePOST() {
        try{
            const response = await fetch("http://localhost:3001/application/add",{
                method: "POST",
                body: JSON.stringify(applicationValues),
                headers: { "Content-Type": "application/json" },
              })
              const data = await response.json()
              console.log(data)
              alert("Solicitud enviada")
        }catch(error){
            console.log(error)
        }
    }

    const applicationValues = {
      trabajador: trabajadorID,
      empleo: empleo.id,
      empresario: empresarioID,
    }

  
  
  
  

    return(
      <Grid container sx={{display:"flex" , flexDirection:"row"}}>
      <Grid item xs={12}>
        <Grid container>
            <Grid item xs={2}>
                <img src={imagen} width="100px"/>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h3">{empleo?.titulo}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h6"><PersonPinIcon/>Juanillo Mangas Verdes</Typography>
            </Grid>
        </Grid>
      </Grid>
        <Grid item xs={7}>
        {/*descripción,jornadas salario,vacantes*/}
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5">{empleo?.especialidad}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">{empleo?.descripcion}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Jornadas: {empleo?.jornadas}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Salario: {empleo?.salario}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Vacantes: {empleo?.vacante}</Typography>
            </Grid>
            </Grid>
        </Grid>

        <Grid item xs={5}>
        {/*Dirección*/}
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5"><LocationIcon/>{empleo.direccion}</Typography>
            </Grid>
        </Grid>
        {/*Fecha*/}
        <Grid container>
        <Grid item xs={12}>
        <Typography variant="h5"><CalendarIcon/>{empleo.fecha}</Typography>
        </Grid>
        </Grid>
          {/*Boton Solicitar Empleo*/}
          <Grid container>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handlePOST} >Solicitar Empleo</Button>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
}