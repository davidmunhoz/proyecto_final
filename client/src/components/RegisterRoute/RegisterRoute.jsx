import { Grid, Typography, Button } from "@mui/material";
import {Link} from 'react-router-dom'

export default function RegisterRoute(){
    return(
        <Grid container>
            <Grid container item xs={12} alignContent={"center"}>
            <Typography variant="h4"> ¿Como quieres registrarte?</Typography>
            </Grid>

            <Grid container item xs={12}>
            <Grid item={6}>
           <Button variant="contained" color="danger" > <Link to="/registerEmpresario" color="white">Empresario</Link></Button>
            </Grid>

            <Grid item={6}>
            {/* <Link>Trabajador</Link> */}
                </Grid>
            </Grid>
        </Grid>
    )
}