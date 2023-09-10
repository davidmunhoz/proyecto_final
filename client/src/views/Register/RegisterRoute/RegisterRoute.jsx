import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RegisterRoute() {
    const navigate = useNavigate();

  return (
    <Grid container>
   
   <Grid container justifyContent="center" alignItems="center" style={{ height: "10vh" }}>
        <Typography variant="h2">¿Como quieres registrarte?</Typography>
      </Grid>

      <Grid container item xs={12} padding={"150px"}>
        <Grid item xs={6} padding={"20px"}>
        <Button variant="contained" color="secondary" size="large" fullWidth 
        onClick={()=>{navigate("/register1")}}>
        Empresario
        </Button>
        </Grid>

        <Grid item xs={6} padding={"20px"}>
        <Button variant="contained" color="secondary" size="large" fullWidth 
        onClick={()=>{navigate("/register2")}}>
        Trabajador
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
