import { useEffect, useState } from "react";
import { Typography, Grid, Paper, IconButton, Tooltip, Box, Pagination} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import Location from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";

export default function Empleos({ empresario }) {
  // async function deleteEmpleo() {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3001/application/delete/${solicitudID}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   try {
  //     const response = await fetch(
  //       `http://localhost:3001/employment/delete/${empleoID}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const [empleo, setEmpleo] = useState([]);
  const navigate = useNavigate();

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
          `http://localhost:3001/employment/getEmpresario/${empresario.id}`
        );
        const data = await response.json();
        console.log(data);
        setEmpleo(data.employment);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmpleo();
  }, [empresario.id]);

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
          <Tooltip title="Borrar Empleo" >
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
