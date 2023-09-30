import { useEffect, useState } from "react";
import { Grid, Typography, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import imagen from "../../../../public/assets/mariachi.jpg"
import Phone from '@mui/icons-material/PhoneAndroid';
import Location from '@mui/icons-material/LocationOn';

export default function Solicitudes({empresario}) {
  const [data,setData] = useState([]);
  const [trabajador,setTrabajador] = useState([]);
  const [loading, setLoading] = useState(true);
  
console.log(trabajador)
  const navigate = useNavigate();
  const empresarioID = empresario.id;

  function trueWorker() {
    let trabajadoresUnicos = [];
    // data.length -1 para que no se incluya el ultimo elemento del array al comparar
    for(let i = 0; i < data.length-1; i++){
    // Verificar si el trabajador actual es diferente al siguiente
        if(data[i].id !== data[i+1].id && data[i]){
            trabajadoresUnicos.push(data[i])   
        }
    }
    trabajadoresUnicos.push(data[data.length-1])
    setTrabajador(trabajadoresUnicos)
  }


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/user/trabajadorbyEmpresario/${empresarioID}`);
        const data= await response.json();
        setData(data.trabajador);
        setLoading(false); // Datos cargados, establece loading en false
      } catch (error) {
        console.error(error);
      }
      trueWorker()
    }
    fetchData();
  }, [empresarioID]);
  
  return (
    <>
      {trabajador.map((trabajadores, index) => (
        <Paper elevation={2} key={index}>
          <Grid container>
            <Grid container item xs={3}>
              <img src={imagen} width="100px" alt="Imagen de trabajador" />
            </Grid>

            <Grid container item xs={9}>
              <Grid item xs={8}>
                <Typography variant="h5">{trabajadores?.nombre}</Typography>
              </Grid>

              <Grid item xs={4}>
                <Button variant="contained" onClick={() => navigate("/perfilview", { state: { trabajadores: trabajadores } })}>Ver Perfil</Button>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2"><Location />{trabajadores?.direccion}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2"><Phone />{trabajadores?.telefono}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
      </>
  );
}
