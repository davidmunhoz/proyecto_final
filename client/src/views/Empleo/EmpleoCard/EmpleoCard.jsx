import { Grid, Typography, Paper, Button} from "@mui/material";
import Agriculture from "@mui/icons-material/Agriculture";
import { useState,useEffect } from "react";

export default function EmpleoCard({autoData}){
console.log(autoData)

const [especialidad,setEspecialidad] = useState(null)
const [imagen,setImagen] = useState(null)
const defaultImage = "../../../../public/especialidad/oliva.jpg"

console.log(especialidad,`especialidad`)
useEffect(()=>{
  setEspecialidad(autoData.especialidad)
},[autoData])

useEffect(()=>{
  setImagen(`../../../public/especialidad/${especialidad}.jpg`)
},[especialidad])




  return(
      <Grid container sx={{pt:5,}}>
  <Paper elevation={3}>
        <Grid container item xs={12} p={2}>
          <Grid container item xs={6} p={1}>
          {especialidad ? (
            <img src={imagen} height={120}  alt="imagen" />
          ):(
            <img src={defaultImage} height={120}  alt="imagen" />
          )}
            
          </Grid>

          <Grid container item xs={6} p={1}>
          <Grid item xs={12}>
          <Typography variant="h5">{autoData.titulo}</Typography>
          </Grid>

            <Grid item xs={6}>
              <Typography variant="body1"><Agriculture /> {autoData.tipotrabajo}</Typography>
              </Grid>

              <Grid item xs={6}>
              <Typography variant="body1"><Agriculture /> {autoData.especialidad}</Typography>
              </Grid>

          </Grid>


          <Grid container item xs={12} p={1}>
    
              <Grid item xs={7}>
                <Typography variant="body1"><b>Dirección:</b> {autoData.direccion}</Typography>
                <Typography variant="body1"><b>Fecha de Publicación:</b> {autoData.fecha}</Typography>
              </Grid>

              <Grid item xs={5}>
                <Button
                 variant="contained"
                  fullWidth
                  color="primary"
                >
                  Ver Detalles
                </Button>
              </Grid>

          </Grid>
        </Grid>
      </Paper>
        
    </Grid>
  )}




