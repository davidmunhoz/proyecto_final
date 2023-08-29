import { useState, useEffect } from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import DetallesEmpleo from "../DetallesEmpleo/DetallesEmpleo";


export default function EmpleoCard({provincia}) {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false); 
   const [click3, setClick3] = useState(false);

  const [empleo, setEmpleo] = useState("");
  const [empleo2, setEmpleo2] = useState("");
  const [empleo3, setEmpleo3] = useState("");

  const [imagen, setImagen] = useState("")
  const [imagen2, setImagen2] = useState("")
  const [imagen3, setImagen3] = useState("")

  console.log(imagen)
  console.log(empleo)
  
  console.log(imagen2)
  console.log(empleo2)

  function handleClick() {
    setClick(!click);
    setClick2(!click2);
    setClick3(!click3);
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
        setImagen2(`../../../public/especialidad/${data.employment[0].especialidad}.jpg`)
        setImagen3(`../../../public/especialidad/${data.employment[2].especialidad}.jpg`)

      } catch (error) {
        console.error("Error fetching empleoData:", error);
      }
    }
    empleoFetch();
  }, [provincia]);

  return (
    <Paper elevation={2}>
      <Grid container>
        <Grid container item xs={3}>
          <img src={imagen} height={95} alt="imagen" />
        </Grid>

        <Grid container item xs={9}>
          <Grid item xs={12}>
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

            <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleClick}
              >
                {click ? "Ocultar" : "Ver"}
              </Button>
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="body3">Publicado: 15/01/2023</Typography>
            </Grid>
          </Grid>
        </Grid>
        {click && <DetallesEmpleo empleo={empleo} />}


        <Grid container item xs={3}>
          <img src={imagen2} height={95} alt="imagen" />
        </Grid>

        <Grid container item xs={9}>
          <Grid item xs={12}>
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

            <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleClick}
              >
                {click ? "Ocultar" : "Ver"}
              </Button>
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="body3">Publicado: 15/01/2023</Typography>
            </Grid>
          </Grid>
        </Grid>
        {click2 && <DetallesEmpleo empleo={empleo} />}


        <Grid container item xs={3}>
          <img src={imagen3} height={95} alt="imagen" />
        </Grid>

        <Grid container item xs={9}>
          <Grid item xs={12}>
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

            <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleClick}
              >
                {click ? "Ocultar" : "Ver"}
              </Button>
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="body3">Publicado: 15/01/2023</Typography>
            </Grid>
          </Grid>
        </Grid>
        {click3 && <DetallesEmpleo empleo={empleo} />}
      </Grid>

      
    </Paper>
    
  );
}