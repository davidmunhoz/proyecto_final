
// import Button from '@mui/material/Button';

import { Grid, Typography, AppBar} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

const footerStyle ={position: 'bottom',
top: 0,
left: 0,
right: 0,
backgroundColor: 'green'}   // Agregamos el estilo para el color de fondo}

export default function Footer() {
    return (
      <Grid container xs={12}  >
     <AppBar position="static"  sx={{display:'flex'}}>



        <Grid container item xs={3}>
          <Typography>
            Autoctono
            Calle Polo Digital
            Releevant
            Malaga,España
          </Typography>
        </Grid>
        <Grid container item xs={3}>
            <Typography>
              <ul>
               <li>Nosotros</li>
               <li>Politica de Privacidad</li>
               <li>Ayuda</li>
              </ul>



            </Typography>
        </Grid>
        <Grid container item xs={3}>
        <Typography>
              <ul>
               <li>Contact Us</li>
               <li>Join Us</li>
               
              </ul>



            </Typography>
        </Grid>
        <Grid container item xs={3}>
         <ul>
          <FacebookIcon/>
          <TwitterIcon/>
          <LinkedInIcon/>
          <GoogleIcon/>
         </ul>


        </Grid>

        </AppBar>
      </Grid>
    );
  }