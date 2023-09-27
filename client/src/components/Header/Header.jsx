import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {useState} from 'react'
import { Link } from "react-router-dom";
import { Grid, Box, Button, IconButton, Menu, MenuItem, Typography, } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import logo3 from "../../../public/assets/logo3.png";

export default function Header() {
const navigate = useNavigate()
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
        <Grid p={2} item xs={6}>
          <Link to="/">
            <Box component={"img"} sx={{ width: "180px", mr: 1 }} src={logo3} />
          </Link>
        </Grid>


        <Grid item xs={3} sx={{justifyContent:"flex-end", pl:75}}>
        {userTrabajador || userEmpresario ? (""):
          (<Button onClick={()=>{navigate("/register")}} sx={{ color: "white" }}>
            Registrate
          </Button>)
        }
        </Grid>

        <Grid item xs={3} sx={{justifyContent:"flex-end", pl:10}}>
        {userTrabajador ?(<div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
             
                <PersonIcon /><Typography variant="body2" sx={{color:"white"}}>Hola!,{userTrabajador.user[0].nombre}</Typography>
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
                <MenuItem onClick={handleClose}>
                <AgricultureIcon/>
                <Button variant="text" sx={{color:"black", p:1, pl:1}}  onClick={()=>{navigate("/perfil1")}}><b>MI PERFIL</b></Button></MenuItem>
                <MenuItem onClick={logout}><Typography sx={{color:"red",pl:1}}>Cerrar sesión</Typography></MenuItem>
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
              <MenuItem onClick={()=>{navigate("/perfil2")}}>
                <AgricultureIcon/> <Typography><b>MI PERFIL</b></Typography></MenuItem>
                <MenuItem onClick={()=>{navigate("/empleo"),handleClose}}><Typography>Publicar Empleo</Typography></MenuItem>
                <MenuItem onClick={logout}><Typography sx={{color:"red",pl:1}}>Cerrar sesión</Typography></MenuItem>
              </Menu>
            </Grid>) 
          : (<Button onClick={()=>{navigate("/login")}} sx={{ color: "white" }}>
            Inicia sesión
          </Button>)
          }
        </Grid>

      </Toolbar>
    </AppBar>
  );
}
