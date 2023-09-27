import {useState} from "react"
import { FormControl, Grid, MenuItem, Select, Typography} from "@mui/material"
// import AndaluciaHome from "../../components/AndaluciaMap/AndaluciaHome/AndaluciaHome"
import HomeCard from "../../components/EmpleoCard/HomeCard/HomeCard"
import AndaluciaMap from "../../components/AndaluciaMap/AndaluciaMap"
import AndaluciaG from "../../components/AndaluciaMap/MapaBueno/AndaluciaG"
// import AndaluciaG from "../../components/AndaluciaMap/MapaBueno/AndaluciaG"

const recoleccion = [
    { label: '          ', value:'' },
    { label: 'Fresa', value:'fresa' },
    { label: 'Ajo', value: 'ajo'},
    { label: 'Oliva', value: 'oliva' },
    { label: 'Cebolla', value:'cebolla'}
  ];
  
  const maquinaria =[
    { label: '          ', value:'' },
    { label:'Tractorista', value:'tractorista'},
    {label:'Buggy' , value:'buggy'}
  ]
  
  const otros = [
    { label: '          ', value:'' },
    { label:'Talador', value:'talador'},
    { label:'Tecnico de Riego', value:'riego'},
    { label:'Ingeniero agrícola', value:'ingeniero agricola'},
  
  ]
  const tipotrabajo = [
    { label: '          ', value:'' },
    { label: 'Recolector', value:'recolector' },
    { label: 'Maquinaria', value:'maquinaria' },
    { label: 'Otros', value:'otros' } ];

export default function Home(){
const [provincia,setProvincia] = useState(null)
const [tipoTrabajo, setTipoTrabajo] = useState("")
const [especialidadFilter, setEspecialidadFilter] = useState("")
console.log(especialidadFilter)


    return(
               <Grid container>

               {/* Home si no se ha presionado el Mapa */}
               {!provincia &&(
                <Grid container>
                <Grid container>
                <Grid item xs={12}>
                <Typography sx={{color:" #2C3D50"}} variant="h3">  Busca <span style={{ textDecoration: 'underline' }}>trabajo</span> en el portal líder de empleo   
         <span style={{ textDecoration: 'underline' }}> agrícola</span> </Typography>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item xs={12} sx={{alignItems:"center"}}>
                <Typography variant="h6">Selecciona en el mapa la provincia en la que buscas trabajo</Typography>
                    <AndaluciaG selectProvincia={setProvincia} />
                </Grid>
                </Grid>
                </Grid>
               )}
               

                {/* Home si se ha presionado el Mapa */}
                {provincia &&(

                    <Grid container >
                    <Grid item xs={7} sx={{pr:4}}>
                    <HomeCard provincia={provincia} />
                    </Grid>

                    <Grid item xs={5}>
                    <Grid container  >
                    <Grid item xs={12}>
                    <Typography variant="h4">Selecciona la provincia donde deseas buscar empleo</Typography>
                    </Grid> 
                    </Grid>

                    <Grid container  >
                    <Grid item xs={12} >
                    <AndaluciaG selectProvincia={setProvincia}/> 
                    </Grid> 
                    </Grid>

                    <Grid container  >
                    {/* Select tipo de trabajo */}
                    <Grid item xs ={6}>
                    <Typography>Selecciona el tipo de trabajo</Typography>
  <FormControl size="big">
    <Select
      labelId="tipotrabajo"
      id="tipotrabajo"
      name="tipotrabajo"
      value={tipoTrabajo}
      onChange={(event) => {
        setTipoTrabajo(event.target.value)
        console.log(event.target.value)
      }}
    >
      {tipotrabajo.map((trabajo, index) => (
        <MenuItem key={index} value={trabajo.value}>{trabajo.label} </MenuItem>))}
    </Select>
  </FormControl>
                    </Grid>

                      {/* Select especialidad! */}
                    {tipoTrabajo === "recolector" && (
                        <Grid item xs ={6}>
<Typography>Selecciona el tipo de fruto</Typography>
  
    <FormControl size="big">
      <Select
        labelId="especialidad"
        id="especialidad"
        name="especialidad"
        value={especialidadFilter}
        onChange={(event) => {
          setEspecialidadFilter(event.target.value)
      }}
      >
        {recoleccion.map((recolectado, index) => (
          <MenuItem key={index} value={recolectado.value}>{recolectado.label}</MenuItem>))}
      </Select>
    </FormControl>
                        </Grid>
    )}


  {tipoTrabajo === "maquinaria" && (
    <Grid item xs ={6}>
  <Typography>Selecciona el tipo de maquinaria</Typography>
    <FormControl size="big">
      <Select
        labelId="especialidad"
        id="especialidad"
        name="especialidad"
        value={especialidadFilter}
        onChange={(event) => {
          setEspecialidadFilter(event.target.value)
      }}
      >
        {maquinaria.map((maquinas, index) => (
          <MenuItem key={index} value={maquinas.value}>{maquinas.label}</MenuItem>))}
      </Select>
    </FormControl>
    </Grid>)}

  {tipoTrabajo === "otros" && (
    <Grid item xs ={6}>
  <Typography>Otros empleos</Typography>
    <FormControl size="big">
      <Select
        labelId="especialidad"
        id="especialidad"
        name="especialidad"
        value={especialidadFilter}
        onChange={(event) => {
          setEspecialidadFilter(event.target.value)
      }}
      >
        {otros.map((otros, index) => (
          <MenuItem key={index} value={otros.value}>{otros.label}</MenuItem>))}
      </Select>
    </FormControl>
    </Grid>
    )}
                    </Grid>    
                    
     
                        </Grid>     
               </Grid>
               )}
                </Grid>
    )}
       

