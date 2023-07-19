import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container } from "@mui/material";

export default function IndexLayout() {
  return (
    <>
      <Header />
      <Container
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          px: 2,
          mt: "86px",
        }}
      >
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}
