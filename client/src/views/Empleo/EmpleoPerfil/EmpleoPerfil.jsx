import {Button, Divider, Grid, Paper, Typography,Box } from "@mui/material";
import { useEffect,useState } from "react";
import {useLocation} from 'react-router-dom';
import LocationIcon from '@mui/icons-material/LocationOn';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CalendarIcon2 from '@mui/icons-material/CalendarToday';
import EuroIcon from '@mui/icons-material/Euro';
import PersonAdd from '@mui/icons-material/PersonAddAlt1';
import { useAuthContext } from "../../../components/contexts/AuthContext";

export default function EmpleoPerfil(){
    const [empresarioData, setEmpresarioData] = useState("");
    const {userTrabajador} = useAuthContext()
    const trabajadorID = userTrabajador.user[0].id
    const location = useLocation();
    const empleo = location.state.empleo
    const empresarioID = empleo.empresario

    const imagen = `../../../public/especialidad/${empleo?.especialidad}.jpg`
    console.log(empleo)

useEffect(() =>{
    async function empresarioFetch(){
        try {
            const response = await fetch(`http://localhost:3001/user/getEmpresario/${empresarioID}`);
            const data = await response.json()
            console.log(data)
            setEmpresarioData(data.empresario[0])
        }catch(error){
            console.log(error)
        }
    }
    empresarioFetch()
},[empresarioID])

const applicationValues = {
    trabajador: trabajadorID,
    empleo: empleo.id,
    empresario: empresarioID,
  }



     async function handlePOST() {
        try{
            console.log(applicationValues)
            const response = await fetch("http://localhost:3001/application/add",{
                method: "POST",
                body: JSON.stringify(applicationValues),
                headers: { "Content-Type": "application/json" },
              })
              if(response===200){
                const data = await response.json()
                console.log(data)
                if(data){alert("Solicitud enviada")}
              }       
        }catch(error){
            console.log(error)
        }
    }



  

    return(
      <Grid container sx={{display:"flex" , flexDirection:"row"}}>
      
        <Grid item xs={8}>
        {/*Titulo e imagen*/}
        <Grid container sx={{display:"flex" , flexDirection:"row", p:2}} >
        <Grid item xs={4} >
        <img src={imagen} width="240px"/>
        </Grid>
        <Grid item xs={8} sx={{pt:4}}>
        <Typography variant="h4">{empleo?.titulo}</Typography>
</Grid>
        </Grid>

        {/*Descripción*/}
        <Grid container sx={{pt:4,pb:2}}>
        <Grid item xs={12} sx={{pt:1}}>
        <Divider><Typography variant="h5"><b>Descripción</b></Typography></Divider>
                <Typography variant="h6">{empleo?.descripcion}</Typography>
            </Grid>
            </Grid>
           
           {/*Jornadas,Salario,Vacantes,Dirección,Fecha*/}
         <Grid container sx={{pt:5}}>
            <Grid item xs={12} sx={{pt:1}}>
            <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>
            <CalendarIcon2 sx={{pr:1,pt:0.3}}/>
                <Typography variant="h6"> <b>Jornadas aproximadas:</b> {empleo?.jornadas}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{pt:1}}>
            <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>
            <EuroIcon sx={{pr:1,pt:0.3}}/>
            <Typography variant="h6"><b>Salario por hora:</b> {empleo?.salario}</Typography>
            </Box>
            </Grid>
            <Grid item xs={12} sx={{pt:1}}>
            <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>
            <PersonAdd sx={{pr:1,pt:0.3}}/>
            <Typography variant="h6"><b>Puestos Vacantes:</b>{empleo?.vacante}</Typography>
            </Box>
         
            </Grid>

            <Grid item xs={12} sx={{pt:1}}>
            <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>
            <LocationIcon sx={{pr:1,pt:0.3}}/>
            <Typography variant="h6"><b>Dirección:</b>{empleo?.direccion}</Typography>
            </Box>
              
            </Grid>

            <Grid item xs={12} sx={{pt:1}}>
            <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>
            <Typography variant="h6"><b>Fecha de publicación:</b>{empleo?.fecha}</Typography>
            </Box>
                
            </Grid>
 
            </Grid>

        </Grid>

        <Grid item xs={4} sx={{pl:10}}>
        <Grid container>
            <Grid item xs={12} sx={{pl:3,pb:2}}>
                <Typography variant="h5">Publicado por:</Typography>
            </Grid>
        </Grid>

             {/*Empresario del Empleo*/}
             <Paper elevation={2}>
           <Grid container>
           <Grid item xs={12} sx={{pl:4}}>
<Typography variant="h6"><PersonPinIcon/>{empresarioData?.nombre}</Typography>
</Grid>

<Grid item xs={12} sx={{pl:4}}>
<Typography variant="body1"> <LocationIcon/> {empresarioData?.direccion}</Typography>
</Grid>

<Grid item xs={12} sx={{pl:6}}>
<Typography variant="body1"><b>CIF:</b>{empresarioData?.cif}</Typography>
</Grid>
        </Grid>
        </Paper>
        </Grid>

      

               {/*Boton Solicitar Empleo*/}
               <Grid container>
          <Grid item xs={10} sx={{pt:5,pl:25}}>
            <Button variant="contained" fullWidth onClick={handlePOST} >Solicitar Empleo</Button>
          </Grid>
          </Grid>

        </Grid>
    )
}