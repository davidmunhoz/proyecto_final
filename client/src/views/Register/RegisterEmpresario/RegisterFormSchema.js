import * as yup from "yup";

const passwordRules = /^.{5,}$/
// min 5 characters

export const RegisterFormSchema = yup.object().shape({
   nombre:yup
   .string()
   .min(10, "Necesarios mas palabras")
   .max(40)
   .required("Requerido")
   ,
    email: yup
      .string("Debe ser un string")
      .email("Por favor introduzca un email valido")
      .required("Requerido")
      ,
    telefono: yup.number()
    .typeError("Introduce un número")
    .positive("El número debe ser positivo")
    .integer("No se pueden incluir decimales")
    .min(8)
    .required('Número de Telefono Requerido')
    ,
    password: yup
      .string()
      .matches(passwordRules, {
        message:
          "Debe contener un minimo de 5 caracteres",
      })
      .required("Requerido")
      ,
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required(),
  });