import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
import LoginFormik from "../LoginFormik/LoginFormik";


import logo3 from "../../../public/assets/logo3.png";

export default function Header({ tokenValue }) {

  console.log(tokenValue)
  return (
    <AppBar sx={{color:"primary"}}>
      <Toolbar
        sx={{ maxWidth: "1200px", margin: "0 auto", width: "100%", px: 2 }}
      >
        <Grid p={2} container justifyContent="flex-start" alignItems={"center"}>
          <Link to="/">
            <Box component={"img"} sx={{ width: "180px", mr: 1 }} src={logo3} />
          </Link>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Link to="/perfil" style={{ color: "white" }}>
            Perfil
          </Link>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Link to="/empleo" style={{ color: "white" }}>
            Empleo
          </Link>
        </Grid>

        <Grid container justifyContent="flex-end">
        {tokenValue ?(  <Typography>Logeado</Typography>       ):
          (<Link to="/login" style={{ color: "white" }}>
            Iniciar Sesion
          </Link>)
          }
        </Grid>

        <Grid container justifyContent="flex-end">
          <Link to="/register" style={{ color: "white" }}>
            Registrate
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
