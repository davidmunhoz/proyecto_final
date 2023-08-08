import { Grid, Typography, Button } from "@mui/material";
import {Link} from 'react-router-dom'

export default function RegisterRoute(){
    return(
        <Grid container>
            <Grid container item xs={12} alignContent={"center"}>
            <Grid item xs={12}>
            <Typography variant="h3"> Como quieres registrarte?</Typography>
            </Grid>

            <Grid item xs={6}>
           <Button variant="contained" color="secondary" size="big"> <Link to="/register1" color="white">Empresario</Link></Button>
            </Grid>
            
            <Grid item xs={6}>
            <Button variant="containded" color="secondary" size="big" > <Link to="/register2" color="white"> Trabajador</Link> </Button>
                </Grid>
            </Grid>


        </Grid>
    )
}