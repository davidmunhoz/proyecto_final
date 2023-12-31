import { Grid, Typography, Button,} from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import {useState} from "react";

export default function DetallesCard({ empleo, empleo2, empleo3 }) {

const [solicitud, setSolicitud] = useState("")
  const { userTrabajador} = useAuthContext()
  console.log(solicitud);
  console.log(userTrabajador)

const  formValues = {
  trabajador : `${userTrabajador.user[0].id}`,
  empleo : `${empleo?.id || empleo2?.id || empleo3?.id}`,
  empresario : `${empleo?.empresario || empleo2?.empresario || empleo3?.empresario}`,
}
console.log(formValues)

   function handleClick() {
    console.log(formValues)

    async function addSolicitud(){
      try{
        const response = await fetch("http://localhost:3001/application/add",{
          method: "POST",
          body: JSON.stringify(formValues),
      })
      const data = await response.json()
      if(response.status === 200){
        console.log(data)
        setSolicitud(data)
      }else{
        console.log("error")
      }
    }catch(error){
      console.log(error)
    }}
    addSolicitud()
    }
    


  return(
      <Grid container>
        <Grid container item xs={6}>
          <Grid item xs={12}>
            <Typography>
              {empleo?.descripcion || empleo2?.descripcion || empleo3?.descripcion}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {empleo?.jornadas || empleo2?.jornadas || empleo3?.jornadas}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {empleo?.salario || empleo2?.salario || empleo3?.salario}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {empleo?.vacante || empleo2?.vacante || empleo3?.vacante}
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={6} p={2}>
          <Grid item xs={12}>
            <Typography>
              {empleo?.direccion || empleo2?.direccion || empleo3?.direccion}
            </Typography>
          </Grid>
          {userTrabajador && (
            <Grid item xs={12}>
            <Button fullWidth variant="contained" onClick={handleClick} >
              Suscribirse
            </Button>
          </Grid>
          )}

        </Grid>
        {solicitud &&(
      <Typography variant="h4">SOLICITUD REALIZADA!</Typography>
    )}
      </Grid>


  );
}
