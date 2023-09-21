import { useState, useEffect } from "react";
import { Grid, Typography, Button, Paper} from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useAuthContext } from "../../contexts/AuthContext";
import DetallesCard from "../DetallesCard/DetallesCard";
import { useNavigate } from "react-router-dom";

export default function HomeCard({provincia}) {
const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  const [empleo, setEmpleo] = useState("");
  const [empleo2, setEmpleo2] = useState("");
  const [empleo3, setEmpleo3] = useState("");

  const [imagen, setImagen] = useState("")
  const [imagen2, setImagen2] = useState("")
  const [imagen3, setImagen3] = useState("")

  const { userTrabajador } = useAuthContext();

  function handleClick() {
    setClick(!click);
  }
  function handleClick2() {
    setClick2(!click2);
  }

  function handleClick3(){
    setClick3(!click3)
  }

  useEffect(() => {
    async function empleoFetch(){
      try {
        const response = await fetch(`http://localhost:3001/employment/get/${provincia}`);
        const data = await response.json();

        setEmpleo(data.employment[0]);
        setEmpleo2(data.employment[1]);
        setEmpleo3(data.employment[2]);

        setImagen(`../../../public/especialidad/${data.employment[0].especialidad}.jpg`)
        setImagen2(`../../../public/especialidad/${data.employment[1].especialidad}.jpg`)
        setImagen3(`../../../public/especialidad/${data.employment[2].especialidad}.jpg`)

        if(provincia != provincia){
          setEmpleo(data.employment[0]);
          setEmpleo2(data.employment[1]);
          setImagen(`../../../public/especialidad/${data.employment[0].especialidad}.jpg`)
          setImagen2(`../../../public/especialidad/${data.employment[1].especialidad}.jpg`)
        }
      } catch (error) {
        console.error(error);
      }
    }
    empleoFetch();
  }, [provincia]);

  return(
      <Grid container>

{(!click2 || !click3) && (  
  <>
  <Paper elevation={2}>
  <Grid container item xs={9}>
  <Grid  item xs={6}>
     <img src={imagen} height={95} alt="imagen" />
   </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">{empleo?.titulo}</Typography>
          </Grid>

          <Grid container item xs={12} p={2}>
            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleo?.tipotrabajo}</Typography>
            </Grid>

            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleo?.especialidad}</Typography>
            </Grid>
{userTrabajador && (    <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => {
                navigate('/empleoPerfil', {state:{empleo:empleo}})
                }}
              >
                {click ? "Ocultar" : "Ver"}
              </Button>
            </Grid>)}
        
            
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="body3">Publicado: {empleo?.fecha}</Typography>
            </Grid>

            <Grid item xs={12}>
            {click && <DetallesCard empleo={empleo} />}
            </Grid>
            
          </Grid>
        </Grid>
        </Grid>
        </Paper>
        </>
        )}
        <br/>

{(!click || !click3) && (  
  <>
  <Paper elevation={2}>
  <Grid container item xs={9}>
  <Grid  item xs={6}>
     <img src={imagen2} height={95} alt="imagen" />
   </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">{empleo2?.titulo}</Typography>
          </Grid>

          <Grid container item xs={12} p={2}>
            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleo2?.tipotrabajo}</Typography>
            </Grid>

            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleo2?.especialidad}</Typography>
            </Grid>

            {userTrabajador && (    <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleClick2}
              >
                {click2 ? "Ocultar" : "Ver"}
              </Button>
            </Grid>)}
            
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="body3">Publicado: {empleo2?.fecha}</Typography>
            </Grid>

            <Grid item xs={12}>
            {click2 && <DetallesCard empleo={empleo2}/>}
            </Grid>
            
          </Grid>
        </Grid>
        </Grid>
        </Paper>
        </>
        )}

        <br/>
        
        {(!click || !click2) && (  
  <>
  <Paper elevation={2}>
  <Grid container item xs={9}>
  <Grid  item xs={6}>
     <img src={imagen3} height={95} alt="imagen" />
   </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">{empleo3?.titulo}</Typography>
          </Grid>

          <Grid container item xs={12} p={2}>
            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleo3?.tipotrabajo}</Typography>
            </Grid>

            <Grid item xs={4}>
              <DensityMediumIcon />
              <Typography variant="body3">{empleo3?.especialidad}</Typography>
            </Grid>

            {userTrabajador && (    <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleClick2}
              >
                {click3 ? "Ocultar" : "Ver"}
              </Button>
            </Grid>)}
            
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="body3">Publicado: {empleo3?.fecha}</Typography>
            </Grid>

            <Grid item xs={12}>
            {click3 && <DetallesCard empleo={empleo3}/>}
            </Grid>
            
          </Grid>
        </Grid>
        </Grid>
        </Paper>
        </>
        )}

    </Grid>
  )
}