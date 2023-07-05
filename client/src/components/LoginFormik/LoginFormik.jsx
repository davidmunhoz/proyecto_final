import { useFormik } from "formik";
import { Grid, TextField, Typography, Button } from "@mui/material";
import { initialValues } from "./utils/initialValues";

async function onSubmit(values, actions) {
  console.log(values);
  console.log(actions);

  fetchLogin(values);

}


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
      console.log(token)}
      
  }catch(error){
    console.log(error)
  }}

export default function LoginFormik() {


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

        <Grid item xs={12}>
          <TextField
            label="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
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
      </Grid>
    </form>
  );
}
