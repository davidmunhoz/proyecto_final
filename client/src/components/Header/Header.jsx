import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {useState} from 'react'
import { Link } from "react-router-dom";
import { Grid, Box, Button, IconButton, Menu, MenuItem, Typography, } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import PersonIcon from '@mui/icons-material/Person';
import logo3 from "../../../public/assets/logo3.png";

export default function Header() {

const {userTrabajador, userEmpresario, logout} = useAuthContext()

const [anchorEl, setAnchorEl] = useState(null);

const handleClose = () => {
  setAnchorEl(null);
};

const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};


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
        {userTrabajador || userEmpresario ? (""):
          (<Link to="/register" style={{ color: "white" }}>
            Registrate
          </Link>)
        }
        </Grid>


        <Grid container justifyContent="flex-end">
        {userTrabajador ?(<div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
             
                <PersonIcon /><hr/><Typography variant="body2" sx={{color:"white"}}>Hola!,{userTrabajador.user[0].nombre}</Typography>
              </IconButton>
             
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/perfil1">Perfil Trabajador</Link></MenuItem>
                <MenuItem onClick={handleClose}><Button onClick={logout}>Logout</Button></MenuItem>
              </Menu>
            </div>    
            ) 
            : userEmpresario ? (<Grid>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <PersonIcon />  <Typography variant="body2" sx={{color:"white"}}>Bienvenido!, {userEmpresario.user[0].nombre}</Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/perfil2">Perfil Empresario</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/empleo">Publicar Empleo</Link></MenuItem>
                <MenuItem onClick={handleClose}><Button onClick={logout}>Logout</Button></MenuItem>
              </Menu>
            </Grid>) 
          : (<Link to="/login" style={{ color: "white" }}>
            Iniciar sesión
          </Link>)
          }
        </Grid>

      </Toolbar>
    </AppBar>
  );
}
