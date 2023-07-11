import { useState } from "react";
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button, Autocomplete } from "@mui/material";
import { initialValues } from "./utils/initialValues";



const tipoRecoleccion = [
  { label: 'Fresa' },
  { label: 'Ajo' },
  { label: 'Oliva' },
  { label: 'Cebolla' },
];

const tipoMaquinaria =[
  { label:'Tractorista'},
  {label:'Buggy'}
]

const tipoTrabajo = [
  { label: 'Recolector' },
  { label: 'Maquinaria Pesada' },
  { label: 'Talador' }
];


export default function Empleo(){

  const [selection, setSelection] = useState(null);
  
  const handleComplete = (event,value) => {
    console.log(selection)
    setFieldValue("trabajo",value.label)
    setSelection(value)
  };
  
  const handleShow = (event,value) =>{
    console.log(value)
    setFieldValue("especialidad",value.label)
  }
  


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
    isSubmitting,
    setFieldValue
  } = useFormik({
    onSubmit,
    initialValues
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container sx={{justifyContent: 'flex-end'}} >
      <Grid  mb={2} item xs={12}>
          <Typography variant="h3"> Publica un empleo </Typography>
        </Grid>

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
            label="vacantes"
            type="number"
            size="small"
            name="vacantes"
            value={values.vacantes}
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

        <Grid  mb={2} item xs={12}>
          <TextField
            label="provincia"
            type="text"
            size="small"
            name="text"
            value={values.provincia}
            onChange={handleChange}
            onBlur={handleBlur}
          />


        </Grid>

        <Grid mb={2} item xs={12} alignItems={"center"}>
        <Autocomplete
        disablePortal
        id="tipotrabajo"
        options={tipoTrabajo}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tipo de Trabajo" />}
        onChange={handleComplete}
        value={values.tipotrabajo}
        onBlur={handleBlur}
      />
      </Grid>
      <Grid mb={2} item xs={12} alignItems={"center"}>

      {selection && selection.label === 'Recolector' && (
        
        <Autocomplete
        disablePortal
        id="recolector"
        options={tipoRecoleccion}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tipo de Recolección" />}
        onChange={handleShow}
        onBlur={handleBlur}
        value={values.especialidad}
      />

      )}

      {selection && selection.label === 'Maquinaria Pesada' && (
        
        <Autocomplete
        disablePortal
        id="maquinaria"
        options={tipoMaquinaria}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tipo de Maquinaria" />}
        onChange={handleShow}
        onBlur={handleBlur}
        value={values.especialidad}
      />

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
    </form>
  );
}
