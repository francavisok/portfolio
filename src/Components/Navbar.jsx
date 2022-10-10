import React, { useState } from "react";

//Material UI imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
//React Icons
import {
  FcBusinesswoman,
  FcOpenedFolder,
  FcBusinessContact,
} from "react-icons/fc";
import { Padding } from "@mui/icons-material";

//object created to dynamically display tabs on the navbar
const pages = [
  { title: "About Me", icon: <FcBusinesswoman /> },
  { title: "Projects", icon: <FcOpenedFolder /> },
  { title: "Contact", icon: <FcBusinessContact /> },
];

//Menu state and functions to open and close
const Navbar = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Box maxWidth="xl" paddingX={3} sx={{margin: '0 auto', width: '100%' }}>
        <Toolbar disableGutters >
          <Typography
            variant={isNotSmallerScreen ? "h5" : "h6"}
            noWrap
            component="a"
            href="/"
            sx={{
              //ml: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {isNotSmallerScreen ? "Franca Visokolskis" : "Franca V."}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "end",
            }}
          >
            {isNotSmallerScreen ? (
              pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{
                    py: 2,
                    px: 4,
                    color: "white",
                    display: "block",
                    ":hover": { color: "#acf39d", transition: "0.4s" },
                  }}
                >
                  {page.title}
                </Button>
              ))
            ) : (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  /*                   sx={{
                    display: { xs: "block", md: "none" },
                  }} */
                >
                  {pages.map((page) => (
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                      <ListItemIcon>{page.icon}</ListItemIcon>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
