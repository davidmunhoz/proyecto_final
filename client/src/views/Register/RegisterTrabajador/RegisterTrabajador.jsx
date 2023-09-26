import { useState } from "react";
import { useFormik } from "formik";
import {Grid, TextField, Typography, Button, Checkbox, FormGroup, FormControlLabel} from "@mui/material";
import { initialValues } from "./utils/initialValues";
import { RegisterFormSchema } from "./RegisterFormSchema";
import PopUpRegister from "../../../components/PopUp/PopUpRegister";
import jornaleroImagen from "../../../../public/imageRegister/jornalero1.jpg";
import CarouselTrabajador from "../../../components/Carousel/CarouselTrabajador";
// import CarouselTrabajador from './utils/CarouselTrabajador';

export default function RegisterTrabajador() {
  const [clickCarnet, setClickCarnet] = useState(false);
  const [clickCoche, setClickCoche] = useState(false);

  const [registerIncorrect, setRegisterIncorrect] = useState(false);

  async function onSubmit(values, actions) {

    console.log(values);
    console.log(actions);

    try {
      const response = await fetch(
        "http://localhost:3001/user/registerTrabajador",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.status !== 200) {
        setRegisterIncorrect(true);
      }
    } catch (error) {
      console.log(error);
    }

    // actions.resetForm();
  }

  const handleCheckCarnet = () => {
    if (clickCarnet === false) {
      setClickCarnet(true);
      values.carnet = 1;
    } else {
      setClickCarnet(false);
      values.carnet = 0;
    }
  };

  const handleCheckCoche = () => {
    if (clickCoche === false) {
      setClickCoche(true);
      values.coche = 1;
    } else {
      setClickCoche(false);
      values.coche = 0;
    }

  
  };

  console.log(clickCarnet);
  console.log(clickCoche);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: RegisterFormSchema,
    onSubmit,
  });

  return (
    <>
    <Grid container sx={{display:"flex" , flexDirection:"row"}}>

{/* Contenedor de la imagen/carousel?*/}
   <Grid  item xs={6}  >
 <Grid container sx={{display:"flex", flexDirection:"column", pr:2}}>
<Grid item xs={12}>
<CarouselTrabajador/>
</Grid>
  </Grid>
      </Grid>

    <Grid item xs={6}>
    <form onSubmit={handleSubmit}>
    <Grid container sx={{display:"flex", flexDirection:"column", pl:15}}>
    <Grid item xs={12} >
    <Typography sx={{pr:2.5}} variant="h3">Date de Alta como Jornalero</Typography>
    </Grid>

    {/* Contenedor del titulo de datos de usuario */}
    <Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
      <Grid item xs={1}>
        <Typography variant="h5"><span style={{ display: 'inline', width: '35px', height: '40px', background: '#EEEEEE', color: 'green', borderRadius:"15%", padding:1}}>1.</span>Datos de usuario</Typography>
      </Grid>

    </Grid>
    {/* Contenedor del campo email */}
      <Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
        <Grid item xs={7}>
        <TextField
          label="Email"
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          size="medium"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        </Grid>

      </Grid>

       {/* Contenedor del campo contraseña */}
       <Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
        <Grid item xs={7}>
        <TextField
          label="Contraseña"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          size="medium"
          fullWidth
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        </Grid>
      </Grid>
{/* Contenedor del campo repetir la contraseña */}
        <Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>

        <Grid item xs={7}>
        <TextField
          label="Confirmar Contraseña"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          size="medium"
          fullWidth
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        </Grid>
      </Grid>

 {/* Contenedor del Curriculum */}
 <Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
      <Grid item xs={7}>
        <Typography variant="h5"><span style={{ display: 'inline', width: '35px', height: '40px', background: '#EEEEEE', color: 'green', borderRadius:"15%", padding:1}}>2.</span>Curriculum del Jornalero</Typography>
      </Grid>

      <Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
        <Grid item xs={7}>
        <TextField
          label="Nombre del Jornalero"
          type="text"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          size="medium"
          fullWidth
          className={errors.nombre && touched.nombre ? "input-error" : ""}
        />
        {errors.nombre && touched.nombre && (
          <p className="error">{errors.nombre}</p>
        )}
        </Grid>

      </Grid>

{/* Contenedor del campo telefono */}
<Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
        <Grid item xs={7}>
        <TextField
          label="Teléfono"
          type="number"
          name="telefono"
          value={values.telefono}
          onChange={handleChange}
          onBlur={handleBlur}
          size="medium"
          fullWidth
          className={errors.telefono && touched.telefono ? "input-error" : ""}
        />
        {errors.telefono && touched.telofono && (
          <p className="error">{errors.telefono}</p>
        )}
        </Grid>

      </Grid>


{/* Contenedor del campo dirección */}
<Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
        <Grid item xs={7}>
        <TextField
          label="Direccion"
          type="text"
          name="direccion"
          value={values.direccion}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          className={
            errors.direccion && touched.direccion ? "input-error" : ""
          }
        />
        </Grid>

      </Grid>

      {/* Contenedor del campo de Carnet y Vehículo */}
<Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
        <Grid item xs={5}>
        <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={clickCarnet}
                  color="danger"
                  onChange={handleCheckCarnet}
                />
              }
              label="Carnet de Conducir"
            />
             </FormGroup>
        </Grid>

        <Grid item xs={5}>
        <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={clickCoche}
                  color="danger"
                  onChange={handleCheckCoche}
                />
              }
              label="Vehículo Disponible"
            />
             </FormGroup>
        </Grid>

      </Grid>

{/* Contenedor de experiencia */}
<Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
        <Grid item xs={10}>
        <TextField
          fullWidth
          multiline
          rows={3}
          type="text"
          name="experiencia"
            value={values.experiencia}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Tu Experiencia como Jornalero"
            size="medium"
            className={
            errors.experiencia && touched.experiencia ? "input-error" : ""
            }
          />
        </Grid>

      </Grid>

{/* Contenedor del Button*/}
<Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
<Grid item xs={10}>
        <Button type="submit" variant="contained" disabled={isSubmitting} fullWidth>
          Date de Alta
        </Button>
      </Grid>
</Grid>

{/* Contenedor del Register Incorrecto*/}
{registerIncorrect  && (
<Grid container sx={{display:"flex", flexDirection:"row", p:"16px 16px 16px 0"}}>
<Grid item xs={5}>
          <PopUpRegister />
      </Grid>
</Grid>
)}

      </Grid>
      </Grid>
      </form>
    </Grid>


    </Grid>
    </>
  );
}
