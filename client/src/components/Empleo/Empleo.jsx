import { useState } from "react";
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button, Autocomplete } from "@mui/material";
import { initialValues } from "./utils/initialValues";


const provincias = [{label: 'Almería'},
 {label: 'Cádiz'},
  {label: 'Córdoba'},
   {label: 'Granada'},
    {label: 'Huelva'},
     {label: 'Jaén'}, 
     {label: 'Málaga'}, 
     {label: 'Sevilla'}]

const recoleccion = [
  { label: 'Fresa' },
  { label: 'Ajo' },
  { label: 'Oliva' },
  { label: 'Cebolla' },
];

const maquinaria =[
  { label:'Tractorista'},
  {label:'Buggy'}
]

const tipotrabajo = [
  { label: 'Recolector' },
  { label: 'Maquinaria Pesada' },
  { label: 'Talador' }
];


export default function Empleo(){

  const [selection, setSelection] = useState(false);
  
  const handleComplete = (e,value) => {
    console.log(selection)
    setFieldValue("tipotrabajo",`${value.label}`)
    console.log(value)
    setSelection(value)
  };
  
  const handleShow = (e,value) =>{
    console.log(value)
    setFieldValue("especialidad", `${value.label}` || "especialidad", `${value.label}`);
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
          <Autocomplete
            id="provincia"
            options={provincias}
            getOptionLabel={(option) => option.label}
            sx={{ width: 300 }}
            defaultValue={`${provincias[0].label}`}
            renderInput={(params=> <TextField {...params} label="Seleccione Provincia"  onChange={ handleChange } onBlur={ handleBlur }
            size="small" type="text" variant="outlined" />)}
                margin="normal"
                onChange={(e, value) => {
                  setFieldValue("provincia", `${value.label}`);
                }}
                />
               

        </Grid>

        <Grid mb={2} item xs={12} alignItems={"center"}>
        <Autocomplete
        disablePortal
        id="tipotrabajo"
        options={tipotrabajo}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        defaultValue={`${tipotrabajo[0].label}`}
        onChange={handleComplete}
        renderInput={(params) => <TextField {...params} label="Tipo de Trabajo" size="small" type="text" variant="outlined" value={values.tipotrabajo}
         onChange={handleChange} onBlur={handleBlur}/>}

      />
      </Grid>
      <Grid mb={2} item xs={12} alignItems={"center"}>

      {selection && selection.label === 'Recolector' && (
        
        <Autocomplete
        disablePortal
        id="especialidad"
        options={recoleccion}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        defaultValue={`${recoleccion[0].label}`}
        renderInput={(params => <TextField {...params} label="Tipo de Recolector" size="small" type="text" variant="outlined"  value={values.especialidad}
        onChange={ handleChange } onBlur={ handleBlur }
        />)}
        onChange={handleShow}
      />

      )}

      {selection && selection.label === 'Maquinaria Pesada' && (
        
        <Autocomplete
        disablePortal
        id="especialidad"
        options={maquinaria}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        defaultValue={`${maquinaria[0].label}`}
        renderInput={(params => <TextField {...params} label="Tipo de Trabajo" size="small" type="text" variant="outlined" value={values.especialidad}
        onChange={ handleChange } onBlur={ handleBlur }
        />)}
        onChange={handleShow}
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
