import { useState } from "react";
import { useFormik } from "formik";
import {Grid, TextField, Typography, Button, Checkbox, FormGroup, FormControlLabel} from "@mui/material";
import { initialValues } from "./utils/initialValues";
import { RegisterFormSchema } from "./RegisterFormSchema";
import PopUpVerde from "../../../components/PopUp/PopUpVerde";
import PopUpRojo from "../../../components/PopUp/PopUpRojo";
import jornaleroImagen from "../../../../public/imageRegister/jornalero1.jpg";

export default function RegisterTrabajador() {
  const [clickCarnet, setClickCarnet] = useState(false);
  const [clickCoche, setClickCoche] = useState(false);

  const [registerCorrect, setRegisterCorrect] = useState(false);
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

      if (response.status === 200) {
        setRegisterCorrect(true);
      } else {
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
    <form onSubmit={handleSubmit}>
      <Grid container>
      <Grid container item xs={6}>
      <Grid item xs={12}>
      <Typography variant="h2">Registrate como jornalero</Typography>
      </Grid>
        <Grid mb={2} item xs={12}>
          <TextField
            label="nombre"
            type="text"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            className={errors.nombre && touched.nombre ? "input-error" : ""}
          />
          {errors.nombre && touched.nombre && (
            <p className="error">{errors.nombre}</p>
          )}
        </Grid>
        <Grid mb={2} item xs={12}>
          <TextField
            label="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </Grid>
        <Grid mb={2} item xs={12}>
          <TextField
            label="contraseña"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
        </Grid>
        <Grid mb={2} item xs={12}>
          <TextField
            label="confirmar contraseña"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
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
        <Grid mb={2} item xs={12}>
          <TextField
            label="telefono"
            type="number"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            className={errors.telefono && touched.telefono ? "input-error" : ""}
          />
          {errors.telefono && touched.telofono && (
            <p className="error">{errors.telefono}</p>
          )}
        </Grid>

        <Grid mb={2} item xs={12}>
          <TextField
            label="direccion"
            type="text"
            name="direccion"
            value={values.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            className={
              errors.direccion && touched.direccion ? "input-error" : ""
            }
          />
        </Grid>

        <Grid mb={2} item xs={12}>
          <TextField
            label="experiencia"
            type="text"
            name="experiencia"
            value={values.experiencia}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            className={
              errors.direccion && touched.direccion ? "input-error" : ""
            }
          />
        </Grid>

        <Grid mb={2} item xs={12}>
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={clickCoche}
                  color="danger"
                  onChange={handleCheckCoche}
                />
              }
              label="Vehiculo Propio"
            />
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Crear cuenta
          </Button>
        </Grid>

        {registerCorrect && (
          <Grid item xs={12}>
            <PopUpVerde />
          </Grid>
        )}

        {registerIncorrect && (
          <Grid item xs={12}>
            <PopUpRojo />
          </Grid>
        )}
        </Grid>
        <Grid container item xs={6}>
        <img src={jornaleroImagen}/>
        </Grid>
      </Grid>
    </form>
  );
}
