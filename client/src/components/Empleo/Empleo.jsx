import { useFormik } from "formik";
import { Grid, TextField, Typography, Button } from "@mui/material";
import { initialValues } from "./utils/initialValues";
import SelectionJob from "../SelectionJob/SelectionJob";
import PopUpVerde from "../PopUp/PopUpVerde"
import PopUpRojo from "../PopUp/PopUpRojo"
import { useState } from "react";

export default function Empleo(){
  const [employmentCorrect,setemploymentCorrect] = useState(false)
  const [employmentIncorrect,setemploymentIncorrect] = useState(false)
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
    if(response.status === 201){
        setemploymentCorrect(true)}
        else{
          setemploymentIncorrect(true)
        }
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
        <Grid  mb={2} item xs={12} justifyContent={"center"}>
            <SelectionJob/>
        </Grid>
        <Grid item xs={12}>
          <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          >
            Enviar
          </Button>
        </Grid>
        {employmentCorrect  && (
          <Grid item xs={12}>
            <PopUpVerde />
          </Grid>
        )}
        {employmentIncorrect && (
          <Grid item xs={12}>
            <PopUpRojo />
          </Grid>
        )}
      </Grid>
    </form>
  );
}




