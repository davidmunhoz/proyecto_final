import { Splide, SplideSlide } from '@splidejs/react-splide';
import jornalero1 from "../../../public/imageRegister/jornalero1.jpg"
import tractorista from "../../../public/imageRegister/tractor-empresario.jpg"
import mariachi from "../../../public/assets/mariachi.jpg"
import { Grid } from '@mui/material';

export default function CarouselTrabajador() {

  const imagenes = [jornalero1, tractorista, mariachi];

  // Crea la instancia de Splide con las opciones deseadas.
  const splideOptions = {
    type: 'loop', // Opcional: habilita el bucle infinito.
    autoplay: true, // Activa el autoplay.
    interval: 300, // Intervalo en milisegundos (3 segundos).
  };

  return (
    <Grid container>
      <Splide options={splideOptions}>
          <SplideSlide>
            <img src={imagenes.jornalero1} alt="imagen1" />
          </SplideSlide>
      </Splide>
    </Grid>
  );
}