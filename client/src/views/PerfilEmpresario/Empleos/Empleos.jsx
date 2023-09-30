import { useEffect, useState } from "react";
import { Typography, Grid, Button, Paper,} from "@mui/material";
import Delete from '@mui/icons-material/Delete';
import Edit from "@mui/icons-material/Edit";

export default function Empleos({empresario}) {
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
  
const [empleo,setEmpleo] = useState([])
const empresarioID = empresario.id

    useEffect(() => {
      async function fetchEmpleo() {
        try {
          const response = await fetch(`http://localhost:3001/employment/getEmpresario/${empresarioID}`);
          const data = await response.json();
          console.log(data)
          setEmpleo(data.employment);
        } catch (error) {
          console.error(error);
        }
      }
      fetchEmpleo();
    }, [empresarioID]);


  return (
    <Grid container>
{empleo.map((empleos,index)=>(
  <Paper elevation={3} key={index}>

        <Grid item xs ={3}>
            <img src={`../../../public/especialidad/${empleos.especialidad}.jpg`} width="100px"></img>
        </Grid>

        <Grid  item xs ={7}>
        <Grid container>

        </Grid>
        <Grid item xs={12}> 
        <Typography variant="h6">{empleos?.titulo}</Typography>
        </Grid>

        <Grid xs={12}>
        <Typography variant="h6">Fecha de Publicación:{empleos?.fecha}</Typography>
        </Grid>
       
        </Grid>

{/* Boton de eliminar y editar */}
        <Grid item xs ={2}>
        <Grid container>
          <Button startIcon={<Delete sx={{color:"red"}}/>} onClick={deleteEmpleo} />
        </Grid>

        <Grid container>
          <Button startIcon={<Edit/>}/>
        </Grid>
        </Grid>
        </Paper>
))}
  
      
    </Grid>
  );
}
