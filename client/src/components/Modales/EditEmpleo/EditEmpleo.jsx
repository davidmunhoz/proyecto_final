import { useState } from 'react';
import { styled, Box, Modal, Backdrop, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Importa el icono "X" o usa tu propio ícono.

const StyledModal = styled(Modal)(() => ({
  position: 'fixed',
  zIndex: 1300,
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledBackdrop = styled(Backdrop)(() => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent',
}));

const modalStyles = (theme) => ({
  width: 400,
  borderRadius: 12,
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});

export default function EditEmpleo({ modalOpen }) {
  const [open, setOpen] = useState(modalOpen);

  const handleClose = () => {
    setOpen(false);
    }

    return (
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          sx={{ component: StyledBackdrop }}
        >
          <Box sx={modalStyles}>
            <IconButton
              aria-label="Cerrar"
              onClick={handleClose}
              style={{ position: 'absolute', top: '8px', right: '8px' }}
            >
              <CloseIcon />
            </IconButton>
            <h2 id="unstyled-modal-title">Text in a modal</h2>
            <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
          </Box>
        </StyledModal>
      );
  };

 
