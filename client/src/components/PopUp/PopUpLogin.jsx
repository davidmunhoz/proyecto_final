import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useState } from "react";


export default function PopUpLogin(){
    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpen(false);
      };
      return (
        <Stack spacing={2} sx={{ width: "45%" }}>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
              Email o Contraseña incorrectos
            </Alert>
          </Snackbar>
        </Stack>
      )
}