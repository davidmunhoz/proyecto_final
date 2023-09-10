import { Grid, Typography, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import imagen from "../../../../public/assets/mariachi.jpg"
import Phone from '@mui/icons-material/PhoneAndroid';
import Location from '@mui/icons-material/LocationOn';

export default function Solicitudes({trabajador}){
    const navigate = useNavigate();

    return(
        <Paper elevation={3}>
        <Grid container>
        <Grid container item xs ={3}>
            <img src={imagen} width="100px"></img>
        </Grid>

        <Grid  container item xs ={9} >
        <Grid item xs={8}> 
        <Typography variant="h5">{trabajador?.nombre}</Typography>
        </Grid>

        <Grid item xs={4}> 
        <Button  variant="contained" onClick={()=> {navigate("/perfilview", {state:{trabajador:trabajador}})}} >Ver Perfil</Button>
        </Grid>

        <Grid item xs={12}> 
            <Typography variant="body2"><Location/>{trabajador?.direccion}</Typography>
        </Grid>

        <Grid item xs={12}>
        <Typography variant="body2"><Phone/>{trabajador?.telefono}</Typography>
        </Grid>
       
        </Grid>
        </Grid>
        </Paper>
    )
}