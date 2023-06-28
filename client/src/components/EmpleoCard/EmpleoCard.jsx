import aceituna from "../../assets/aceituna.jpg"
import  {Grid, Typography, Button, Paper } from "@mui/material"
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState, useEffect } from "react";
import DetallesCard from "../DetallesEmpleo/DetallesEmpleo";

export default function HomeCard(){
const [click,setClick] = useState(false)
const [empleoData , setEmpleoData] = useState(null)

function handleClick(){
    setClick(true)
    if(click === true){
        setClick(false)
    }
}

useEffect(() => {
    async function fetchData() {

      const response = await fetch("http://localhost:3001/employment/get");
        const data = await response.json();
        setEmpleoData(data)
      } 
      fetchData();
    
      return
    }, [])


    return(
        <Paper elevation={2}>
        <Grid container >
        <Grid container item xs={3}>
        <img src={aceituna} height="95"/>
        </Grid>

        <Grid container item xs={9}>
        <Grid item xs={12}>
            <Typography variant="h6">{empleoData.titulo}</Typography>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={4}>
            <DensityMediumIcon/>
                <Typography variant="body3">Recolector</Typography>
            </Grid>

            <Grid item xs={4}>
            <DensityMediumIcon/>
            <Typography variant="body3">Aceituna</Typography>
            </Grid>

            <Grid item xs={4}>
            {!click && <Button variant="contained" size="small" color="primary" onClick={handleClick}>Ver</Button>} 
            {click && <Button variant="contained" size="small" color="primary" onClick={handleClick}> Ocultar</Button>}
            </Grid>

        </Grid>

        <Grid container item xs={12}>
        <Grid item xs={12}> 
        <Typography variant="body3">Publicado : 15/01/2023</Typography>
        </Grid>
        </Grid>

  
        </Grid>

        </Grid>
        {click && <DetallesCard />}
        </Paper>

    )
}