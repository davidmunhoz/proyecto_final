import {Button, Grid, Typography } from "@mui/material";
import { useEffect,useState } from "react";
import {useLocation} from 'react-router-dom';

export default function EmpleoPerfil(){
    const [empresarioData, setEmpresarioData] = useState("");
    const location = useLocation();
    const empleo = location.state.empleo
    const empresarioID = empleo.empresario
    const imagen = `../../../public/especialidad/${empleo?.especialidad}.jpg`
    console.log(empleo)

useEffect(() =>{
    async function empresarioFetch(){
        try {
            const response = await fetch(`http://localhost:3001/user/getEmpresario/${empresarioID}`);
            const data = response.json()
            console.log(data)
            setEmpresarioData(data)
        }catch(error){
            console.log(error)
        }
    }
    empresarioFetch()
},[empresarioID])
    function handleClick(){
        alert("Te has suscrito al empleo")
    }

    return(
      <Grid container>
        <Grid container item xs={12}>
        <Grid container item xs={6}>
            <img src={imagen} width="150px"/>
        </Grid>
        <Grid container item xs={6}>
            <Grid item xs={12}>
                <Typography variant="h3">{empleo?.titulo}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5">{empleo?.tipotrabajo}</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h5">{empleo?.especialidad}</Typography>
            </Grid>
        </Grid>
        </Grid>

        <br/><br/>
        <Grid container item xs={12}>
            <Grid item xs={12}>
                <Typography variant="h4">{empleo?.direccion}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h4">{empleo?.descripcion}</Typography>
            </Grid>

        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={4}>
                <Typography variant="h4">{empleo?.salario}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant="h4">{empleo?.jornadas}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant="h4">{empleo?.vacante}</Typography>
            </Grid>

        </Grid>

        <Grid container item xs={12}>
        <Grid item xs={12}>
                <Typography variant="h4">{empresarioData?.nombre}</Typography>
        </Grid>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={6}>
                <Typography variant="h4">{empleo?.fecha}</Typography>
            </Grid>

            <Grid item xs={6}>
                <Button variant="contained" onClick={handleClick}>Sucribirse al Empleo</Button>
            </Grid>

        </Grid>

      </Grid>
    )
}