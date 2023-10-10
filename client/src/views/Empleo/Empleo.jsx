import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Typography, Button, FormControl, Select, MenuItem, InputAdornment, Divider } from "@mui/material";
import { useAuthContext } from "../../components/contexts/AuthContext";
import EmpleoCard from "./EmpleoCard/EmpleoCard";
import autoctono from "../../../public/assets/logo3.png"

const provincias = [
  {label:'Almería' , value:'almeria'},
 {label:'Cádiz', value:'cadiz'},
  {label:'Córdoba', value:'cordoba'},
   {label:'Granada', value: 'granada'},
    {label:'Huelva', value: 'huelva'},
     {label:'Jaén', value: 'jaen'}, 
     {label:'Málaga', value: 'malaga'}, 
     {label:'Sevilla', value: 'sevilla'}]

const recoleccion = [
  { label: 'Fresa', value:'fresa' },
  { label: 'Ajo', value: 'ajo'},
  { label: 'Oliva', value: 'oliva' },
  { label: 'Cebolla', value:'cebolla'}
];

const maquinaria =[
  { label:'Tractorista', value:'tractorista'},
  {label:'Buggy' , value:'buggy'}
]

const otros = [
  { label:'Talador', value:'talador'},
  { label:'Tecnico de Riego', value:'riego'},
  { label:'Ingeniero agrícola', value:'ingeniero agricola'},

]
const tipotrabajo = [
  { label: 'Recolector', value:'recolector' },
  { label: 'Maquinaria', value:'maquinaria' },
  { label: 'Otros', value:'otros' }
];



export default function Empleo(){
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
      titulo : "",
      descripcion:"",
      salario:"",
      jornadas:"",
      vacante:"",
      direccion:"",
      provincia:``,
      tipotrabajo:``,
      especialidad:``
  });
  
console.log(formData)

  async function handleOnchange(){
    setFormData(values)
  }

  const [tipoTrabajo, setTipoTrabajo] = useState("")
  // const [especialidad, setEspecialidad] = useState("")
  // const [provincia, setProvincia] = useState("")

  const{userEmpresario} = useAuthContext()
  const idEmpresario = userEmpresario.id
  let date = new Date()
  
  async function onSubmit() {
    console.log(values);
    
      try{
        const response = await fetch("http://localhost:3001/employment/add",{
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" }
      })
      const data = await response.json()
      console.log(data)
      if(response.ok){
        alert("Empleo añadido exitosamente")
        navigate("/perfil2")
      }
    }catch(error){
      console.log(error)
    }

  }




  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = useFormik({
    onSubmit,
    initialValues : {
      titulo : "",
      descripcion:"",
      salario:"",
      jornadas:"",
      empresario:`${idEmpresario}`,
      fecha:`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      vacante:"",
      direccion:"",
      provincia:"",
      tipotrabajo:"",
      especialidad:""
    }
  });

  return (
    <form onSubmit={handleSubmit} onChange={handleOnchange}>
      <Grid container sx={{ width: '100%', display: 'flex'}} >

      <Grid item xs={6} sx={{color:"white", backgroundColor:"#5C8D3A" , position:"fixed", pt:6}}>
      <Grid container sx={{ backgroundColor: "#5C8D3A"}}>
      <Grid item xs={12} sx={{p:1,pl:18, }}>
        <img src={autoctono}/>       
      </Grid>

      <Grid item xs={12} sx={{pl:9}}>
      <Typography  variant="h4" fontFamily="monospace" > <b>#1 PORTAL DE EMPLEO AGRÍCOLA</b></Typography>
      </Grid>

      </Grid>

      <Grid container sx={{ backgroundColor: "#5C8D3A", pt:10}}>
        <Grid item xs={12} sx={{pb:16, pl:4,pr:4 ,pt:12}}>
        <Divider sx={{pb:2, }}><Typography variant="h5">VISTA PREVIA</Typography></Divider>
        <EmpleoCard formData={formData}/>
        </Grid>
      </Grid>
      </Grid>
    
      <Grid  item xs={6} sx={{ p:1, pl:10, marginLeft:"50%" }}>
      {/* Container de la descripción empleo */}
      <Grid container>
      <Grid item xs={12}>
      <Grid xs={12} p={2}>
        <Typography variant="h4" p={1}><span style={{ display: 'inline', width: '35px', height: '40px', background: '#EEEEEE', color: 'green', borderRadius:"15%" }}>1.</span> DESCRIBE TU EMPLEO </Typography>
        </Grid>

        <Grid xs={12} p={1}>
        <Typography variant="h6">Título</Typography>
        <TextField
                type="text"
                name="titulo"
                size="small"
                value={values.titulo}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </Grid>
           
        <Grid xs={12} p={1}>
        <Typography variant="h6">Descripción</Typography>
          <TextField
            type="text"
            name="descripcion"
            size="small"
            value={values.descripcion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            </Grid>

     

            <Grid  xs={12} p={1}>
            <Typography variant="h6">Salario</Typography>
          <TextField
            type="number"
            size="small"
            name="salario"
            InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
            value={values.salario}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid xs={12} p={1}>
        <Typography variant="h6">Jornadas Aproximadas</Typography>
          <TextField
            type="number"
            size="small"
            name="jornadas"
            value={values.jornadas}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid xs={12} p={1}>
        <Typography variant="h6">Jornaleros necesarios</Typography>
          <TextField
            type="number"
            size="small"
            name="vacante"
            value={values.vacante}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        </Grid>
</Grid>

{/* Container de la localización */}
<Grid container>
        <Grid item xs={12} p={2}>
        <Grid xs={12} p={1} >
          <Typography variant="h4"><span style={{ display: 'inline', width: '35px', height: '40px', background: '#EEEEEE', color: 'green', borderRadius:"15%" }}>2.</span> LOCALIZACIÓN DEL EMPLEO</Typography>
        </Grid> 
        <Grid xs={12} p={1} >
        <Typography variant="h6">Introduce la Provincia</Typography>
      <FormControl size="big">
        <Select
          id="provincias"
          name="provincia"
          value={values.provincia}
          onChange={
            handleChange      
          }
          onBlur={handleBlur}
        >
        {provincias.map((provinciado , index) => (
          <MenuItem key={index} value={provinciado.value}>{provinciado.label}</MenuItem>))}
        </Select>
      </FormControl>
       </Grid>

        <Grid xs={12} p={1}>
        <Typography variant="h6">Introduce la Dirección</Typography>
          <TextField
            type="text"
            size="small"
            name="direccion"
            value={values.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        </Grid>
        </Grid>

{/* Container del tipo de empleo */}
        <Grid container>
        <Grid item xs={12} p={1}>
          <Typography variant="h4"><span style={{ display: 'inline', width: '35px', height: '40px', background: '#EEEEEE', color: 'green', borderRadius:"15%" }}>3.</span>TIPO DE EMPLEO</Typography>
        </Grid>
       <Grid item xs={12} p={1}>
       <Typography variant="h6">Selecciona el tipo de trabajo</Typography>
       </Grid>

        <Grid item xs={12} p={1}>
  <FormControl size="big">
    <Select
      labelId="tipotrabajo"
      id="tipotrabajo"
      name="tipotrabajo"
      value={values.tipotrabajo}
      onChange={(event) => {
        handleChange(event)
        setTipoTrabajo(event.target.value)
        console.log(event.target.value)
      }}
      onBlur={handleBlur}
    >
      {tipotrabajo.map((trabajo, index) => (
        <MenuItem key={index} value={trabajo.value}>{trabajo.label} </MenuItem>))}
    </Select>
  </FormControl>
</Grid>

{tipoTrabajo === "recolector" && (
<Grid item xs={12} p={1}>
<Typography>Selecciona el tipo de fruto</Typography>
  
    <FormControl size="big">
      <Select
        labelId="especialidad"
        id="especialidad"
        name="especialidad"
        value={values.especialidad}
        onChange={(event) => {
          handleChange(event)
      }}
        onBlur={handleBlur}
      >
        {recoleccion.map((recolectado, index) => (
          <MenuItem key={index} value={recolectado.value}>{recolectado.label}</MenuItem>))}
      </Select>
    </FormControl>
  </Grid>
  )}

  {tipoTrabajo === "maquinaria" && (
  <Grid item xs={12} p={1}>
  <Typography>Selecciona el tipo de maquinaria</Typography>
    <FormControl size="big">
      <Select
        labelId="especialidad"
        id="especialidad"
        name="especialidad"
        value={values.especialidad}
        onChange={(event) => {
          handleChange(event)
      }}
        onBlur={handleBlur}
      >
        {maquinaria.map((maquinas, index) => (
          <MenuItem key={index} value={maquinas.value}>{maquinas.label}</MenuItem>))}
      </Select>
    </FormControl>
  </Grid>
  )}

  {tipoTrabajo === "otros" && (
  <Grid item xs={12} p={1}>
  <Typography>Otros empleos</Typography>
    <FormControl size="big">
      <Select
        labelId="especialidad"
        id="especialidad"
        name="especialidad"
        value={values.especialidad}
        onChange={(event) => {
          handleChange(event)
      }}
        onBlur={handleBlur}
      >
        {otros.map((otros, index) => (
          <MenuItem key={index} value={otros.value}>{otros.label}</MenuItem>))}
      </Select>
    </FormControl>
    </Grid>
  )}

</Grid>

{/* Container del button */}
<Grid container>
        <Grid item xs={12} p={1}>
          <Button 
          size="large"
          type="submit" 
          variant="contained" 
          disabled={isSubmitting}
          >
            Enviar
          </Button>
        </Grid>
        </Grid>
      </Grid>
        
      </Grid>
    </form>
  );
}
