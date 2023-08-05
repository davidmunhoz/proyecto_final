import { useFormik } from "formik";
import { Grid, TextField, Typography, Button, Paper} from "@mui/material";
import { initialValues } from "./utils/initialValues";
import PopUpVerde from "../../components/PopUp/PopUpVerde";
import PopUpRojo from "../../components/PopUp/PopUpRojo";
import { useAuthContext } from "../../components/contexts/AuthContext";


export default function Login() {

const { user,fetchLogin,errorMessage,logout} = useAuthContext()



  async function onSubmit(values, actions) {
 
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
        {user  && (
          <Grid item xs={12}>
            <PopUpVerde />
          </Grid>
        )}
        {errorMessage  && (
          <Grid item xs={12}>
            <PopUpRojo />
          </Grid>
        )}
      </Grid>
      </Paper>
    </form>
  
  );
}
