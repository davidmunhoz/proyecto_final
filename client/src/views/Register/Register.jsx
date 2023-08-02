import {useState} from "react";
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button, Checkbox } from "@mui/material";
import { initialValues } from "./utils/initialValues";
import { RegisterFormSchema } from "./RegisterFormSchema";
import PopUpVerde from "../../components/PopUp/PopUpVerde"
import PopUpRojo from "../../components/PopUp/PopUpRojo"



const label = { inputProps: { "aria-label": "¿Eres empresario?" } };

export default function Register(){
  const [click, setClick] = useState(false);

  const [registerCorrect,setRegisterCorrect] = useState(false)
  const [registerIncorrect,setRegisterIncorrect] = useState(false)

  async function onSubmit(values, actions) {
    console.log(values);
    console.log(actions);

      try{
      const response = await fetch("http://localhost:3001/user/register",{
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




  const handleCheckBox = () => {
    setClick(!click);
  };
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
        <Grid item xs={12} mb={2}>
          <Typography variant="h3" > Registrate </Typography>
        </Grid>
        <Grid  mb={2} item xs={12}>
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
        <Grid  mb={2} item xs={12}>
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
        <Grid  mb={2} item xs={12}>
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
        <Grid  mb={2} item xs={12}>
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
        <Grid  mb={2} item xs={12}>
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
        <Grid  mb={2} item xs={12}>
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
          <Grid  mb={2} item xs={12}>
          <Checkbox
            color="danger"
            {...label}
            checked={click}
            onChange={handleCheckBox}
          />
          <Typography>¿Eres Empresario?</Typography>
        </Grid>
        {click && (
          <Grid mb={2} item xs={12}>
            <TextField
            type="text"
            name="cif"
              value={values.cif}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Introduce tu C.I.F"
              size="small"
              className={
              errors.direccion && touched.direccion ? "input-error" : ""
            }
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Enviar
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
    </form>
  );
}