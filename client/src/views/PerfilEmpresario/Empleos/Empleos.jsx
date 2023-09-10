import { useState } from "react";
import { Typography, Grid, Button, Paper, IconButton,Stack } from "@mui/material";
import Delete from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export default function Empleos({empleo,empleo2,solicitudes}) {
  const empleoPerfil = empleo
  const empleoPerfil2 = empleo2
  const [empleoID,setEmpleoID] = useState("")
  const [solicitudID,setSolicitudID]= useState("")
  // const [empleoPerfil2,setEmpleoPerfil2] = useState(empleo2)


    async function deleteEmpleo(){
      try{
        const response = await fetch(`http://localhost:3001/application/delete/${solicitudID}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        console.log(response)
        }catch(error){
          console.log(error)
      }
  
      try{
        const response = await fetch(`http://localhost:3001/employment/delete/${empleoID}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        console.log(response)
        }catch(error){
          console.log(error)
      }
    }


  function handleClick(){
  for(let i=0; i<solicitudes.length; i++){
   if(solicitudes[i].empleo === empleo.id){
    setEmpleoID(empleo.id)
    setSolicitudID(solicitudes[i].id)
   } 
  }

  if(empleoID){
    deleteEmpleo();
  }
}

function handleClick2(){
  for(let i=0; i<solicitudes.length; i++){
   if(solicitudes[i].empleo === empleo2.id){
    setEmpleoID(empleo2.id)
    setSolicitudID(solicitudes[i].id)
   } 
  }

  if(empleoID && solicitudID){
    deleteEmpleo();
  }
}



 


console.log(empleo)
console.log(empleo2)

  const navigate = useNavigate();
  const imagen = `../../../public/especialidad/${empleo.especialidad}.jpg`
  const imagen2 = `../../../public/especialidad/${empleo2.especialidad}.jpg`

  return (
    <Grid container>
      <Grid container item xs={12}>
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

{empleoPerfil && (
  <Paper elevation={3}>
        <Grid container>
        <Grid container item xs ={3}>
            <img src={imagen} width="100px"></img>
        </Grid>

        <Grid  container item xs ={8}>
        <Grid item xs={12}> 
        <Typography variant="h5">{empleo?.titulo}</Typography>
        </Grid>

        <Grid item xs={6}> 
            <Typography variant="body2">{empleo?.tipotrabajo}</Typography>
        </Grid>

        <Grid item xs={6}>
        <Typography variant="body2">{empleo?.especialidad}</Typography>
        </Grid>

        <Grid xs={12}>
        <Typography variant="body2">{empleo?.fecha}</Typography>
        </Grid>
       
        </Grid>

        <Grid container item xs ={1}>
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete" onClick={handleClick}> <Delete/></IconButton>
            </Stack>
            </Grid>
        </Grid>
        </Paper>
)}
   
       
{empleoPerfil2 && (
  <Paper elevation={3} >
        <Grid container>
        <Grid container item xs ={3}>
            <img src={imagen2} width="100px"></img>
        </Grid>

        <Grid  container item xs ={8}>
        <Grid item xs={12}> 
        <Typography variant="h5">{empleo2?.titulo}</Typography>
        </Grid>

        <Grid item xs={6}> 
            <Typography variant="body2">{empleo2?.tipotrabajo}</Typography>
        </Grid>

        <Grid item xs={6}>
        <Typography variant="body2">{empleo2?.especialidad}</Typography>
        </Grid>

        <Grid xs={12}>
        <Typography variant="body2">{empleo2?.fecha}</Typography>
        </Grid>
       
        </Grid>

        <Grid container item xs ={1}>
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete" onClick={handleClick2}> <Delete/></IconButton>
            </Stack>
            </Grid>

        </Grid>
        </Paper>)}  

    </Grid>
  );
}
