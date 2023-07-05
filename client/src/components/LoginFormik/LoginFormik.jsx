import { useState } from "react";
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button} from "@mui/material";
import { initialValues } from "./utils/initialValues";
import PopVerde from "../PopUp/PopUpVerde";
import PopRojo from "../PopUp/PopUpRojo";



export default function LoginFormik() {
  async function onSubmit(values, actions) {
    console.log(values);
    console.log(actions);
  
    fetchLogin(values);

    actions.resetForm();
  }
  const [tokenState,setTokenState] = useState("")
  const [errorState,setErrorState] = useState(false)
  
  async function fetchLogin(values){
    
    try{
    const response = await fetch("http://localhost:3001/user/login",{
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      const data = await response.json()
      console.log(data)
      if(response.status === 200){
        const token = data.token
        setTokenState(token)
        console.log(token)
      }else{
          setErrorState(true)
        }
    }catch(error){
      console.log(error)
    }}
  
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
      <Grid container>
        <Grid xs={12}>
          <Typography variant="h3">Accede a tu usuario</Typography>
        </Grid>

        <Grid  mb={2} item xs={12}>
          <TextField
            label="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"

          />
        </Grid>

        <Grid  mb={2} item xs={12}>
          <TextField
          size="small"
            label="contraseña"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
        {tokenState  && (
          <Grid item xs={12}>
            <PopVerde />
          </Grid>
        )}
        {errorState  && (
          <Grid item xs={12}>
            <PopRojo />
          </Grid>
        )}
      </Grid>
    </form>
  
  );
}
