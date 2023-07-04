import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom"
import { Grid, Box} from '@mui/material';





import logo from "../../assets/logo.jpg"

const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  backgroundColor: 'green', // Agregamos el estilo para el color de fondo
};

export default function Header() {
  return (
    <Box>
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>

        <Grid container justifyContent="flex-start">
        <Link to="" relative=''><img src={logo}/></Link>
        </Grid>

        <Grid container justifyContent="flex-end">
        <Link to="/login" relative="">
        Iniciar Sesion
      </Link>
        </Grid>

        <Grid container justifyContent="flex-end">
        <Link to="/register" relative="">
        Registrate
    </Link>
        </Grid>
      </Toolbar>
    </AppBar>
 
  </Box>
  );
}