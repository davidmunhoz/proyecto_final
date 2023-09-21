import { useState } from "react";
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { initialValues } from "./utils/initialValues";


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

const tipotrabajo = [
  { label: 'Recolector', value:'recolector' },
  { label: 'Maquinaria Pesada', value:'maquinaria pesada' },
  { label: 'Talador', value:'talador' }
];


export default function Empleo(){
  const [provincia, setProvincia] = useState("");
  const [tipoTrabajo, setTipoTrabajo] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  



  async function onSubmit(values, actions) {
    console.log(values);
    console.log(actions);

      try{
        const response = await fetch("http://localhost:3001/employment/add",{
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" }
      })
      const data = await response.json()
      console.log(data)
    }catch(error){
      console.log(error)
    }

    actions.resetForm();
  }

 


  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = useFormik({
    onSubmit,
    initialValues
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>

      <Grid container item xs={6}>
      <Grid  item xs={12}>
          <Typography variant="h3"> Publica un empleo </Typography>
        </Grid>
        </Grid>

        <Grid container item xs={6}>
        <Grid  mb={2} item xs={12}>
            <TextField
                label="titulo"
                type="text"
                name="titulo"
                size="small"
                value={values.titulo}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </Grid>

        <Grid  mb={2} item xs={12}>
          <TextField
            label="descripcion"
            type="text"
            name="descripcion"
            size="small"
            value={values.descripcion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            </Grid>

     

            <Grid  mb={2} item xs={12}>
          <TextField
            label="salario"
            type="number"
            size="small"
            name="salario"
            value={values.salario}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid  mb={2} item xs={12}>
          <TextField
            label="jornadas"
            type="number"
            size="small"
            name="jornadas"
            value={values.jornadas}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid  mb={2} item xs={12}>
          <TextField
            label="vacante"
            type="number"
            size="small"
            name="vacante"
            value={values.vacante}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid  mb={2} item xs={12}>
          <TextField
            label="direccion"
            type="text"
            size="small"
            name="direccion"
            value={values.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

       <Grid  mb={2} item xs={12} >
      <FormControl size="medium">
        <InputLabel id="provincias">Provincias</InputLabel>
        <Select
          labelId="provincias"
          id="provincias"
          name="provincia"
          value={provincia}
          label="Seleccion una Provincia"
          onChange={(e) => {
        setProvincia(e.target.value);
        values.provincia = provincia
      }}
          onBlur={handleBlur}
        >
        {provincias.map((provinciado , index) => (
          <MenuItem key={index} value={provinciado.value}>{provinciado.label}</MenuItem>))}
        </Select>
      </FormControl>
       </Grid>

       <Grid mb={2} item xs={12}>
  <FormControl size="big">
    <InputLabel id="tipotrabajo">Tipo de Trabajo</InputLabel>
    <Select
      labelId="tipotrabajo"
      id="tipotrabajo"
      name="tipotrabajo"
      value={tipoTrabajo}
      label="Selecciona el Trabajo ofertado"
      onChange={(e) => {
        setTipoTrabajo(e.target.value);
        values.tipotrabajo = tipoTrabajo
      }}
      onBlur={handleBlur}
    >
      {tipotrabajo.map((trabajo, index) => (
        <MenuItem key={index} value={trabajo.value}>{trabajo.label} </MenuItem>))}
    </Select>
  </FormControl>
</Grid>

<Grid mb={2} item xs={12}>
  {tipoTrabajo && tipoTrabajo === "recolector" && (
    <FormControl size="big">
      <InputLabel id="especialidad">Tipo de Fruto</InputLabel>
      <Select
        labelId="especialidad"
        id="especialidad"
        name="especialidad"
        value={especialidad}
        label="Selecciona Fruto a recoger"
        onChange={(e) => {
        setEspecialidad(e.target.value);
        values.especialidad = especialidad
        // setFieldValue("tipotrabajo", e.target.value );
      }}
        onBlur={handleBlur}
      >
        {recoleccion.map((recolectado, index) => (
          <MenuItem key={index} value={recolectado.value}>{recolectado.label}</MenuItem>))}
      </Select>
    </FormControl>
  )}

  {tipoTrabajo && tipoTrabajo === "maquinaria pesada" && (
    <FormControl size="big">
      <InputLabel id="especialidad">Tipo de Maquinaria</InputLabel>
      <Select
        labelId="especialidad"
        id="especialidad"
        name="especialidad"
        value={especialidad}
        label="Selecciona el maquinista que buscas"
        onChange={(e) => {
        setEspecialidad(e.target.value);
        values.especialidad = especialidad
        // setFieldValue("tipotrabajo", e.target.value );
      }}
        onBlur={handleBlur}
      >
        {maquinaria.map((maquinas, index) => (
          <MenuItem key={index} value={maquinas.value}>{maquinas.label}</MenuItem>))}
      </Select>
    </FormControl>
  )}
</Grid>

        <Grid item xs={12}>
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
    </form>
  );
}
