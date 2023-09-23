import { useState, useEffect } from "react";
import { Grid, Typography, Button, Paper} from "@mui/material";
import Agriculture from "@mui/icons-material/Agriculture";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HomeCard({provincia}) {
const navigate = useNavigate();


  const [empleos, setEmpleos] = useState([]);

  const { userTrabajador } = useAuthContext();


  useEffect(() => {
    async function empleoFetch(){
      try {
        const response = await fetch(`http://localhost:3001/employment/get/${provincia}`);
        const data = await response.json();

        setEmpleos(data.employment);

      } catch (error) {
        console.error(error);
      }
    }
    empleoFetch();
  }, [provincia]);

  return(
    <Grid container>
    {empleos.map((empleo, index) => (
      <Paper elevation={2} key={index}>
        <Grid container item xs={12} p={2}>
          <Grid container item xs={6} p={1}>
            <img src={`../../../public/especialidad/${empleo.especialidad}.jpg`} height={120}  alt="imagen" />
          </Grid>

          <Grid container item xs={6} p={1}>
          <Grid item xs={12}>
          <Typography variant="h5">{empleo.titulo}</Typography>
          </Grid>

            <Grid item xs={6}>
              <Typography variant="body1"><Agriculture /> {empleo.tipotrabajo}</Typography>
              </Grid>

              <Grid item xs={6}>
              <Typography variant="body1"><Agriculture /> {empleo.especialidad}</Typography>
              </Grid>

          </Grid>


          <Grid container item xs={12} p={1}>
    
              <Grid item xs={7}>
                <Typography variant="body1"><b>Dirección:</b> {empleo.direccion}</Typography>
                <Typography variant="body1"><b>Fecha de Publicación:</b> {empleo.fecha}</Typography>
              </Grid>

              <Grid item xs={5}>
                <Button
                 variant="contained"
                  fullWidth
                  color="primary"
                  onClick={ (() => {
                    userTrabajador ? (navigate('/empleoPerfil', { state: { empleo: empleo }})) : (navigate('/register2'))   
                  }
                  )}
                >
                  Ver Detalles
                </Button>
              </Grid>

          </Grid>
        </Grid>
      </Paper>
    ))}
  </Grid>
      
  )
}