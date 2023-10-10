import { Grid, Typography, Paper, Button} from "@mui/material";
import Agriculture from "@mui/icons-material/Agriculture";
import { useEffect, useState } from "react";

export default function EmpleoCard({formData}){
const [especialidad, setEspecialidad] = useState("")
console.log(especialidad)

useEffect(()=>{
  setEspecialidad(formData.especialidad)
},[formData])


  return(
      <Grid container>
  <Paper elevation={2} sx={{ border: "1px solid grey",mb:2 }}>
        <Grid container item xs={12} p={2}>
          <Grid container item xs={6} p={1}>
          {/* {!especialidad ? (
            <img src="../../../../public/especialidad/oliva.jpg" height={120}  alt="imagen" />
          ):(
            <img src={`../../../../public/especialidad/${especialidad}.jpg`} height={120}  alt="imagen" />
          )} */}

          {especialidad ? (
            <img src={`../../../../public/especialidad/${especialidad}.jpg`} height={120}  alt="imagen" />
          ):(
            <img src="../../../../public/especialidad/oliva.jpg" height={120}  alt="imagen" />
          )}
            
          </Grid>

          <Grid container item xs={6} p={1}>
          <Grid item xs={12}>
          <Typography variant="h5"><b>{formData.titulo}</b></Typography>
          </Grid>

            <Grid item xs={6}>
              <Typography variant="body1"><Agriculture /> {formData.tipotrabajo}</Typography>
              </Grid>

              <Grid item xs={6}>
              <Typography variant="body1"><Agriculture /> {formData.especialidad}</Typography>
              </Grid>

          </Grid>


          <Grid container item xs={12} p={1}>
    
              <Grid item xs={7}>
                <Typography variant="body1"><b>Dirección:</b> {formData.direccion}</Typography>
                <Typography variant="body1"><b>Fecha de Publicación:</b> {formData.fecha}</Typography>
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




