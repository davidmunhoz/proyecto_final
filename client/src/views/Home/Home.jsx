import { Grid } from "@mui/material"
import AndaluciaMap from "../../components/AndaluciaMap/AndaluciaMap"
import HomeCard from "../../components/EmpleoCard/EmpleoCard"


export default function Home(){

    return(
        <Grid container>
        <Grid container item xs={6}>
        {/* <Typography variant='h4'>¿En que provincia quieres trabajar?</Typography> */}
        <HomeCard/>
        </Grid>
        <Grid container item xs={6}>
           <AndaluciaMap/> 
        </Grid>
        </Grid>
    )
}