import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { useAuthContext } from "../../components/contexts/AuthContext";
import PerfilCard from "../../components/EmpleoCard/PerfilCard/PerfilCard";
import perfilImagen from "../../../public/imageView/perfilUsuario2.png"
import imagenMariachi from "../../../public/assets/mariachi.jpg"
import LocationIcon from '@mui/icons-material/LocationOn';
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import  EditIcon  from '@mui/icons-material/Edit';
import CarIcon from '@mui/icons-material/DirectionsCar';
import CardIcon from '@mui/icons-material/CreditCard';

export default function PerfilTrabajador() {

  const { userTrabajador } = useAuthContext();

  const styles = {
    background: {
      width: '100%',
      height: 'auto',
      position: 'relative',
    },
    profileImage: {
      position: 'absolute',
      bottom: '53%', // Coloca la imagen en la parte superior del fondo
      left: '20%',
      transform: 'translateX(-50%)',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      zIndex: 1,
    }}

  return (
    <Grid container sx={{ border:"2px solid black"}}>
    <Paper elevation={10}>
    <Grid item xs={12}>
      {/* Imagen del Panel */}
      <Grid container>
        <Grid item xs={12} className="container-image">
        <img src={perfilImagen} style={styles.background} alt="Imagen del Panel" />
      <img src={imagenMariachi} style={styles.profileImage} alt="Foto de perfil" />
        </Grid>
      </Grid>

      <Grid container>
      <Grid item xs={6}>

      <Typography sx={{pt:5,pl:3}} variant="h4">{userTrabajador.nombre}</Typography>
      <Typography variant="h5" sx={{ pt: 1, pl:1, display: 'flex', alignItems: 'center' }}>
    <LocationIcon /> {userTrabajador.direccion}
  </Typography>
      <Typography sx={{borderBottom:"2px solid black",pt:2,pl:3,}} variant="h5" ><b>Experiencia</b></Typography>
        <Typography sx={{pt:1,pl:1}} variant="h6">{userTrabajador.experiencia}</Typography>
      </Grid>

      <Grid item xs={6} sx={{pl:20,pt:2}}>
      <Grid item xs={12} sx={{pl:8,pt:2}}>
      <Button variant="contained" startIcon={<EditIcon/>}>EDITAR USUARIO</Button>
</Grid>

<Grid item xs={12} sx={{ pt: 4, pl: 4 }}>
  <Typography variant="h5" sx={{ pt: 1, display: 'flex', alignItems: 'center' }}>
    <PhoneAndroid sx={{pl:1}} /> {userTrabajador.telefono}
  </Typography>
  {userTrabajador.coche === 1 ? (
    <Typography variant="h6" sx={{ pt: 1, pl:1, display: 'flex', alignItems: 'center' }}>
      <CarIcon /> COCHE DISPONIBLE
    </Typography>
  ) : (
    <Typography variant="h6" sx={{ pt: 1, pl:1, display: 'flex', alignItems: 'center' }}>
      <CarIcon /> COCHE NO DISPONIBLE
    </Typography>
  )}
  {userTrabajador.carnet === 1 ? (
    <Typography variant="h6" sx={{ pt: 1, display: 'flex', alignItems: 'center' }}>
      <CardIcon /> TIENE CARNET
    </Typography>
  ) : (
    <Typography variant="h6" sx={{ pt: 1, display: 'flex', alignItems: 'center' }}>
      <CardIcon /> NO TIENE CARNET
    </Typography>
  )}
</Grid>
        </Grid>
      </Grid>

      <Grid container sx={{pt:3}} >
        <Grid item xs={12} sx={{ pb:2,pt:4}}>
          <Typography variant="h4" sx={{ pl: 50 }}>
            Empleos Solicitados
          </Typography>
          <Divider sx={{borderBottom:"1px solid black"}}/>
        </Grid>

            {/* TAB ELEGIR ENTRE SOLICITUDES Y EMPLEO*/ }
      <Grid item xs={10} sx={{pl:22}}>
        <PerfilCard userTrabajador={userTrabajador}/>
     </Grid>

      </Grid>


    </Grid>
    </Paper>
  </Grid>
     
  );
}
