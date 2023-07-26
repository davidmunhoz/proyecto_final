import { Grid, Box, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";


import logo3 from "../../../public/assets/logo3.png";
export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#5C8D3A" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          p: 10,
        }}
      >
        <Grid container item xs={3} sx={{ display: "flex" }}>
          <Box component={"img"} src={logo3} width="240px" />
        </Grid>
        <Grid container item xs={3} sx={{ display: "flex" }}>
          <ul>
            <Link
              color="#FFF"
              disabled={false}
              level="body1"
              underline="none"
              variant="plain"
            >
              <li>Nosotros</li>
            </Link>
            <Link
              color="#FFF"
              disabled={false}
              level="body1"
              underline="none"
              variant="plain"
            >
              <li>Politica de Privacidad</li>
            </Link>
            <Link
              color="#FFF"
              disabled={false}
              level="body1"
              underline="none"
              variant="plain"
            >
              <li>Ayuda</li>
            </Link>
          </ul>
        </Grid>
        <Grid container item xs={3} sx={{ display: "flex" }}>
          <ul> <Link
              color="#FFF"
              disabled={false}
              level="body1"
              underline="none"
              variant="plain"
            >
            <li>Contact Us</li></Link>
            <Link
              color="#FFF"
              disabled={false}
              level="body1"
              underline="none"
              variant="plain"
            >
            <li>Join Us</li></Link>
          </ul>
        </Grid>
        <Grid container item xs={3}>
          <ul>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <GoogleIcon />
          </ul>
        </Grid>
      </Box>
    </Box>
  );
}