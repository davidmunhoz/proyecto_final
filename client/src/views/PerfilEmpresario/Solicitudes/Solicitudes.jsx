import { useEffect, useState } from "react";
import { Grid, Typography, Paper, Button, Pagination, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import imagen from "../../../../public/assets/mariachi.jpg"
import Phone from '@mui/icons-material/PhoneAndroid';
import Location from '@mui/icons-material/LocationOn';

export default function Solicitudes({empresario}) {
  const [data,setData] = useState([]);
  const [trabajador,setTrabajador] = useState([]);

  //Redondear al alza, Total de Paginas = Total de trabajadores / numero de paginations(5)
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(trabajador.length / 5);

  const trabajadoresPorPagina = 5; // Número de trabajadores por página
const startIndex = (page - 1) * trabajadoresPorPagina; // Índice de inicio
const endIndex = startIndex + trabajadoresPorPagina; // Índice de fin
  console.log(totalPages)

  function handleChange(value) {
    setPage(value);
  }

  const navigate = useNavigate();

  async function trueWorker() {
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
    console.log(trabajadoresUnicos)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/user/trabajadorbyEmpresario/${empresario.id}`);
        const datazo= await response.json();

        setData(datazo.trabajador);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  
  useEffect (()=>{
    trueWorker()
  },[data])


  return (
    <>
  {trabajador.slice(startIndex,endIndex).map((trabajadores, index) => (
    <Paper elevation={5} key={index} sx={{ mb: 3 }}>
     
<Grid container sx={{ p: 1, pt: 2, pb: 2, flexDirection:"row" }}>
        <Grid item xs={4} sx={{ pl: 1 }}>
          <img src={imagen} width="240px" alt="Imagen de trabajador" />
        </Grid>

        <Grid item xs={4} sx={{ pl: 2,display:"flex", flexDirection:"column" }}>
     
            <Grid item xs={12}>
              <Typography variant="h5">{trabajadores?.nombre}</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2"><Location sx={{pt:1,}}/>{trabajadores?.direccion}</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2"><Phone />{trabajadores?.telefono}</Typography>
            </Grid>

        </Grid>
        <Grid item xs={2} sx={{textAlign: "center", pt:8,pl:2}}>
          <Button variant="contained" onClick={() => navigate("/perfilview", { state: { trabajadores: trabajadores } })}>Ver Perfil</Button>
        </Grid>
</Grid>
</Paper>
  ))}

  {totalPages >=1 && (<Box sx={{pl:35, pb:2,}}> <Pagination color="primary" count={totalPages} onChange={handleChange} /> </Box>)}
</>

  );
}
