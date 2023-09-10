import { useFormik } from "formik";
import { Grid, TextField, Typography, Button, Paper} from "@mui/material";
import { initialValues } from "./utils/initialValues";
import PopUpVerde from "../../components/PopUp/PopUpVerde";
import PopUpRojo from "../../components/PopUp/PopUpRojo";
import { useAuthContext } from "../../components/contexts/AuthContext";


export default function Login() {

const { user,fetchLogin,errorMessage,logout} = useAuthContext()



  async function onSubmit(values, actions) {

    console.log(values)
    fetchLogin(values);

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
      <Grid container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: "10vh" }}>
        <Typography variant="h2">Accede a tu cuenta</Typography>
      </Grid>

<Grid container item xs={12}>
        <Grid  mb={2} item xs={12} >
          <TextField
            label="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
           fullWidth

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
            fullWidth
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

        <Grid item xs={12}>
        {user  && (
            <PopUpVerde />
        )}
        {errorMessage  && (
            <PopUpRojo />
        )}
      </Grid>

        </Grid>
        </Grid>


      
    </form>
  
  );
}
