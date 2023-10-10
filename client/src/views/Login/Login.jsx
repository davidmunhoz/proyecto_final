import { useFormik } from "formik";
import { Grid, TextField, Typography, Button,} from "@mui/material";
import { initialValues } from "./utils/initialValues";
import PopUpLogin from "../../components/PopUp/PopUpLogin";
import { useAuthContext } from "../../components/contexts/AuthContext";
import imageLogin from "../../../public/assets/imagenLogin2.jpg"
import { Link } from "react-router-dom";


export default function Login() {
const { fetchLogin ,errorMessage} = useAuthContext()


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
    
      <Grid container>
<Grid item xs={6} sx={{pt:2}}>
<form onSubmit={handleSubmit}>

<Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
<Grid item xs={10} sx={{pl:6}}>
<Typography variant="h3">¡Hola de Nuevo!</Typography>
</Grid>
</Grid>

<Grid container  sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
<Grid item xs={10} sx={{pb:2}}>
<Typography variant="h6">Email</Typography>
          <TextField
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
           fullWidth

          />
</Grid>


<Grid item xs={10} sx={{pb:2}}>
<Typography variant="h6">Contraseña</Typography>
<TextField
          size="medium"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
</Grid>


<Grid item xs={10} sx={{pt:2}}>
<Button
            size="large"
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            
          >
            Enviar
          </Button>
</Grid>
</Grid>

<Grid container sx={{display:"flex", flexDirection:"column", p:"32px 16px 16px 64px"}}>
<Grid item xs={10}>
<Typography variant="h6">¿Aún no tienes cuenta?<Link  to={"/register"} style={{color:"green", paddingLeft:1}} >Regístrate</Link></Typography>
        </Grid>
</Grid>


<Grid container>
{errorMessage  && (
            <PopUpLogin />
        )}
</Grid>
 </form>
</Grid>

<Grid item xs={6}>
  <Grid container>
  <Grid item xs={12}>
  <img src={imageLogin}  alt="imagen" width="135%" height="670px" />
  </Grid>
  </Grid>
</Grid>


     

        </Grid>    
  
   
  );
}
