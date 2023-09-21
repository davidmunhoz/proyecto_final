import {useState} from "react"
import { Grid, Typography, Box } from "@mui/material"
import AndaluciaMap from "../../components/AndaluciaMap/AndaluciaMap"
import HomeCard from "../../components/EmpleoCard/HomeCard/HomeCard"

export default function Home(){
const [provincia,setProvincia] = useState(null)

    return(
        <Grid container >
         {/* <Box sx={{ backgroundColor: 'greenyellow', padding: '6px' }}>
         <Typography sx={{color:" #2C3D50"}} variant="h3">  Busca <span style={{ textDecoration: 'underline' }}>trabajo</span> en el portal líder de empleo   
         <span style={{ textDecoration: 'underline' }}> agrícola</span> </Typography>
    </Box> */}

        <Grid container item xs={6} p={2}>
        {provincia && (
            <Grid item xs={12} p={1}>
        <Typography variant="h4">Selecciona la provincia donde deseas buscar empleo</Typography>
        </Grid>
        )}
    
        <Grid item xs={12} p={1}>
           <AndaluciaMap selectProvincia={setProvincia}/> 
           </Grid>
        </Grid>

        <Grid container item xs={6} alignItems={'center'} style={{ overflow: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
        {!provincia ? (<Grid item xs={12} p={1}><Typography variant="h4">¿Buscas trabajo?</Typography><br/>
        <Typography variant="h6">Selecciona en el mapa la provincia en la que buscas trabajo</Typography></Grid>
        ): 
        (
        <HomeCard provincia={provincia} />)
        }
        </Grid>

        </Grid>
    )
}