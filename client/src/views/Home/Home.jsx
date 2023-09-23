import {useState} from "react"
import { Grid, Typography,} from "@mui/material"
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

        <Grid item xs={6} >
        <Grid container sx={{display:"flex", flexDirection:"column"}}>
        <Grid item xs={12}>
        {provincia && (
        <Typography variant="h4">Selecciona la provincia donde deseas buscar empleo</Typography>
        )}
        </Grid>

        <Grid item xs={12}>
        <AndaluciaMap selectProvincia={setProvincia}/> 
        </Grid>

        </Grid>
        </Grid>

        <Grid item xs={6} alignItems={'center'} >
        {!provincia ? (<Typography variant="h6">Selecciona en el mapa la provincia en la que buscas trabajo</Typography>
        ): 
        (
        <HomeCard provincia={provincia} />)
        }
        </Grid>

        </Grid>
    )
}