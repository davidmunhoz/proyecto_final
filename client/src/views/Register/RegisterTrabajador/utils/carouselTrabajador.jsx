import  { useRef } from "react";
import algodon from "../../../../../public/especialidad/algodon.jpg";
import trigo from "../../../../../public/especialidad/trigo.jpg";
import uva from "../../../../../public/especialidad/uva.jpg";
import tomate from "../../../../../public/especialidad/tomate.jpg";
import fresa from "../../../../../public/especialidad/uva.jpg";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Grid } from "@mui/material";

export default function CarouselTrabajador() {
  const images = [trigo, algodon, uva, tomate, fresa];
  const splideRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false, // No muestra las flechas de "siguiente" y "anterior"
    infinite: true,
    autoplay: true,
    interval: 5000, // Tiempo entre slides
    rewind: true, // Permite rebobinar al final
    onInit: (splide) => {
      // Guarda una referencia al carrusel
      splideRef.current = splide;
    },
    onChange: (splide) => {
      // Detecta cuando se cambia de slide
      if (splide.index === splide.length - 1) {
        // Si es el último slide, reinicia el carrusel
        setTimeout(() => {
          splideRef.current.go(0);
        }, 1000); // Espera un segundo antes de reiniciar
      }
    },
  };

  return (
    <Grid container>
      <Splide options={settings} style={{width:"100%"}}>
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img src={image} alt={`Image ${index}`} width="100%" height="100%" />
          </SplideSlide>
        ))}
      </Splide>
    </Grid>
  );
}




