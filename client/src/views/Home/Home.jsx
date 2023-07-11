import {useState} from "react"
import { Grid, Typography } from "@mui/material"
import AndaluciaMap from "../../components/AndaluciaMap/AndaluciaMap"
import EmpleoCard from "../../components/EmpleoCard/EmpleoCard"

export default function Home(){
const [provincia,setProvincia] = useState(null)
console.log(provincia)

    return(
        <Grid container>
        <Grid container item xs={6} alignItems={'center'}>
        {!provincia ? (<Grid item xs={12}><Typography variant="h3">¿En que provincia deseas trabajar?</Typography><br/>
        <Typography variant="h5">Selecciona en el mapa la provincia en la que buscas trabajo</Typography></Grid>
        ): 
        (
        <EmpleoCard provincia={provincia} />)
        }
        </Grid>
        <Grid container item xs={6}>
           <AndaluciaMap selectProvincia={setProvincia}/> 
        </Grid>
        </Grid>
    )
}