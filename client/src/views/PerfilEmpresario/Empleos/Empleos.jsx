import { Typography, Grid, Button, Paper } from "@mui/material";

import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export default function Empleos({empleo,empleo2}) {

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

      <Paper elevation={3}>
        <Grid container>
        <Grid container item xs ={3}>
            <img src={imagen} width="100px"></img>
        </Grid>

        <Grid  container item xs ={9}>
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
        </Grid>
        </Paper>
       
        
<Paper elevation={3} >
        <Grid container>
        <Grid container item xs ={3}>
            <img src={imagen2} width="100px"></img>
        </Grid>

        <Grid  container item xs ={9}>
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
        </Grid>
        </Paper>
    </Grid>
  );
}
