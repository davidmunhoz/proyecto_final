import {useState} from "react";
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button } from "@mui/material";
import { initialValues } from "./utils/initialValues";
import { RegisterFormSchema } from "./RegisterFormSchema";
import PopUpVerde from "../../../components/PopUp/PopUpVerde"
import PopUpRojo from "../../../components/PopUp/PopUpRojo"
import empresarioImagen from "../../../../public/imageRegister/tractor-empresario.jpg"

export default function RegisterEmpresario(){

  const [registerCorrect,setRegisterCorrect] = useState(false)
  const [registerIncorrect,setRegisterIncorrect] = useState(false)

  async function onSubmit(values, actions) {
    console.log(values);
    console.log(actions);

      try{
      const response = await fetch("http://localhost:3001/user/registerEmpresario",{
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
      const data = await response.json()
      console.log(data)

      if(response.status === 200){
        setRegisterCorrect(true)}
        else{
          setRegisterIncorrect(true)
        }

    }catch(error){
      console.log(error)
    }

    actions.resetForm();
  }


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
      <Typography variant="h2">Registrate como empresario</Typography>
      </Grid>
        <Grid  mb={2} item xs={12}>
          <TextField
            label="nombre"
            type="text"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            size="medium"
            className={errors.nombre && touched.nombre ? "input-error" : ""}
          />
          {errors.nombre && touched.nombre && (
            <p className="error">{errors.nombre}</p>
          )}
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
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </Grid>
        <Grid  mb={2} item xs={12}>
          <TextField
            label="contraseña"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="medium"
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
        </Grid>
        <Grid  mb={2} item xs={12}>
          <TextField
            label="confirmar contraseña"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            size="medium"
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
        <Grid  mb={2} item xs={12}>
          <TextField
            label="telefono"
            type="number"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
            size="medium"
            className={errors.telefono && touched.telefono ? "input-error" : ""}
          />
          {errors.telefono && touched.telofono && (
            <p className="error">{errors.telefono}</p>
          )}
        </Grid>
        <Grid  mb={2} item xs={12}>
          <TextField
            label="direccion"
            type="text"
            name="direccion"
            value={values.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
            size="medium"
            className={
              errors.direccion && touched.direccion ? "input-error" : ""
            }
          />
        </Grid>
          <Grid mb={2} item xs={12}>
            <TextField
            type="text"
            name="cif"
              value={values.cif}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Introduce tu C.I.F"
              size="medium"
              className={
              errors.cif && touched.cif ? "input-error" : ""
              }
            />
          </Grid>

          <Grid mb={2} item xs={12}>
            <TextField
            fullWidth
            type="text"
            name="descripcion"
              value={values.descripcion}
              onChange={handleChange}
              onBlur={handleBlur}
              label="descripcion de la empresa"
              size="medium"
              className={
              errors.descripcion && touched.descripcion ? "input-error" : ""
              }
            />
          </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" disabled={isSubmitting} fullWidth>
            Crear cuenta
          </Button>
        </Grid>
        {registerCorrect  && (
          <Grid item xs={12}>
            <PopUpVerde />
          </Grid>
        )}
        {registerIncorrect  && (
          <Grid item xs={12}>
            <PopUpRojo />
          </Grid>
        )}
        </Grid> 

        <Grid container item xs={6} >
          <img src={empresarioImagen}/>
        </Grid>
      </Grid>
    </form>
  );
}