import { Grid, Typography, Paper} from "@mui/material";
import Location from '@mui/icons-material/LocationOn';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { useAuthContext } from "../../../components/contexts/AuthContext";

export default function EmpleoCard({autoData}){
  
  const {userEmpresario} = useAuthContext()
  const empresarioName = userEmpresario.user[0].nombre

  const imagen = `../../../public/especialidad/${autoData?.especialidad}.jpg`
  const defaultImage = "../../../../public/especialidad/oliva.jpg"

  return(
    
      <Grid container>
  <>
  <Paper elevation={2}>
  <Grid container item xs={9}>
  
    <Grid  item xs={6}>
    {autoData ? (<img src={defaultImage} height={95} alt="imagen" />)
    :(<img src={imagen} height={95} alt="imagen" />)}
    
   </Grid>
 
          <Grid item xs={6}>
          <Typography variant="h6">{autoData?.titulo}</Typography>
          
          </Grid>

          <Grid container item xs={12} p={2}>
            <Grid item xs={4}>
              <Typography variant="body3"><AgricultureIcon/> {autoData?.tipotrabajo}</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="body3"><AgricultureIcon/> {autoData?.especialidad}</Typography>
            </Grid>
        
          <Grid container item xs={12}>
            <Grid item xs={12}>
             <Typography variant="body3"><Location/>{autoData?.direccion}</Typography>
            </Grid>
            
          </Grid>
        </Grid>
        </Grid>
        </Paper>
        </>
        <br/>
        
    </Grid>
  )}