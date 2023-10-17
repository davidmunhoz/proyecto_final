import { Box, Grid, IconButton, Pagination, Paper, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Delete from "@mui/icons-material/Delete";
import Location from '@mui/icons-material/LocationOn';

export default function PerfilCard({ userTrabajador }) {
const [empleo,setEmpleo] = useState([]);

  //Redondear al alza, Total de Paginas = Total de empleos / numero de paginations(5)
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(empleo.length / 5);

  const empleosPorPagina = 5; // Número de empleos por página
const startIndex = (page - 1) * empleosPorPagina; // Índice de inicio
const endIndex = startIndex + empleosPorPagina; // Índice de fin
  console.log(totalPages)
  
  function handleChange(value) {
    setPage(value);
  }


  useEffect(() => {
    async function fetchEmpleo() {
      try {
        const response = await fetch(
          `http://localhost:3001/employment/getTrabajador/${userTrabajador.id}`
        );
        const data = await response.json();
        console.log(data);
        setEmpleo(data.employment);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmpleo();
  }, [userTrabajador.id]);

  return (
    <>
    {empleo.slice(startIndex,endIndex).map((empleos, index) => (
      <Paper elevation={5} key={index} sx={{ mb: 3 }}>
       
  <Grid container sx={{ p: 1, pt: 2, pb: 2, flexDirection:"row" }}>
          <Grid item xs={4} sx={{ pl: 1 }}>
            <img src={`../../../../public/especialidad/${empleos.especialidad}.jpg`} width="240px" alt="Imagen de trabajador" />
          </Grid>
  
          <Grid item xs={4} sx={{ pl: 2,display:"flex", flexDirection:"column" }}>
       
              <Grid item xs={12}>
                <Typography variant="h5">{empleos?.titulo}</Typography>
              </Grid>
  
              <Grid item xs={12}>
                <Typography variant="body2"><Location sx={{pt:1,}}/>{empleos?.direccion}</Typography>
              </Grid>
  
              <Grid item xs={12}>
                <Typography variant="body2">Fecha de Publicación:{empleos?.fecha}</Typography>
              </Grid>
  
          </Grid>
          <Grid item xs={2} sx={{pl:8,pt:4 }}>
          <Tooltip title="Borrar Solicitud" >
            <IconButton sx={{color:"red"}}>
              <Delete sx={{fontSize:"2.5rem"}}/>
            </IconButton>
            </Tooltip>
          </Grid>
  </Grid>
  </Paper>
    ))}
  
    {totalPages >=1 && (<Box sx={{pl:35, pb:2,}}> <Pagination color="primary" count={totalPages} onChange={handleChange} /> </Box>)}
  </>
  );
}
