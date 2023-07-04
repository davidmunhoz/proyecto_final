import {useState, useEffect} from "react"
import { Grid, Typography } from "@mui/material"
import AndaluciaMap from "../../components/AndaluciaMap/AndaluciaMap"
import EmpleoCard from "../../components/EmpleoCard/EmpleoCard"

export default function Home(){
const [provincia,setProvincia] = useState(null)
const [empleo,setEmpleo] = useState("")

    useEffect(()=>{
        async function fetchProvincia(provincia){
            const response = await fetch(`localhost:3001/employment/${provincia}`);
            const data = await response.json()
            setEmpleo(data)
        }

    if(provincia){
        fetchProvincia(provincia);
    }

    },[provincia])




    return(
        <Grid container>
        <Grid container item xs={6} className="pad">
        {!provincia ? (<Typography>¿En que provincia deseas trabajar?</Typography>): 
        (<EmpleoCard/>)
        }
        </Grid>
        <Grid container item xs={6}>
           <AndaluciaMap selectProvincia={setProvincia}/> 
        </Grid>
        </Grid>
    )
}




