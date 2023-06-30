import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import { drawerMenu } from '../Const/drawerMenu';





const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  backgroundColor: 'green', // Agregamos el estilo para el color de fondo
};

export default function Header() {
  return (
    <Box>
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>

        <Grid container justifyContent="flex-start">
          <Typography variant="h6" component="div">
            AUTOCTONO LOGO
          </Typography>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Button color="inherit">Inicia Sesión</Button>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Button color="inherit">Regístrate</Button>
        </Grid>
      </Toolbar>
    </AppBar>
    <List>
    {drawerMenu.map(({ label, icon, path }) => {
      const Icon = icon;
      return (
        <ListItem
          key={label}
          disablePadding
          sx={{
            display: "block",
            backgroundColor:
              location.pathname === path
                ? theme.palette.primary.light
                : null,
          }}
          onClick={open && handleDrawer}
        >
          <Link to={path}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      );
    })}
  </List>
  </Box>
  );
}