import { useState } from "react";
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button, Paper} from "@mui/material";
import { initialValues } from "./utils/initialValues";
import PopUpVerde from "../../components/PopUp/PopUpVerde";
import PopUpRojo from "../../components/PopUp/PopUpRojo";



export default function Login({ tokenado }) {
  async function onSubmit(values, actions) {
    console.log(values);
    console.log(actions);
  
    fetchLogin(values);

    actions.resetForm();
  }


  const [tokenValue,setTokenValue] = useState(false)
  const [errorState,setErrorState] = useState(false)
  
  if (tokenValue !== false ){
    tokenado(tokenValue)
  }

console.log(tokenado)

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
        setTokenValue(data.token)
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
    <Paper elevation={8} variant="outlined" square>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">Accede a tu cuenta</Typography>
        </Grid>

        <Grid  mb={2} item xs={12}>
          <TextField
            label="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            size="medium"

          />
        </Grid>

        <Grid  mb={2} item xs={12}>
          <TextField
          size="medium"
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
            size="large"
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            
          >
            Enviar
          </Button>
        </Grid>
        {tokenValue  && (
          <Grid item xs={12}>
            <PopUpVerde />
          </Grid>
        )}
        {errorState  && (
          <Grid item xs={12}>
            <PopUpRojo />
          </Grid>
        )}
      </Grid>
      </Paper>
    </form>
  
  );
}
