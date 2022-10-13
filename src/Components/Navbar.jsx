import React, { useState } from "react";
//import react-router-dom
import { Link } from "react-router-dom";

//Material UI imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
//React Icons
import { FaUserCircle, FaFolderOpen } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";

//object created to dynamically display tabs on the navbar
const pages = [
  { title: "About Me", icon: <FaUserCircle />, link: "me" },
  { title: "Projects", icon: <FaFolderOpen />, link: "projects" },
  { title: "Contact", icon: <MdPermContactCalendar />, link: "contact" },
];

const Navbar = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  //Menu state and functions to open and close
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Box maxWidth="xl" paddingX={3} sx={{ margin: "0 auto", width: "100%" }}>
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: "1rem",
              fontFamily: "monospace",
              fontWeight: 700,
              //letterSpacing: ".3rem",
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
                <Link
                  key={page.title}
                  to={page.link}
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      py: 2,
                      px: 4,
                      color: "white",
                      display: "block",
                      ":hover": { color: "#FFB585", transition: "0.4s" },
                    }}
                  >
                    {page.title}
                  </Button>
                </Link>
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
                    <Link
                      key={page.title}
                      to={page.link}
                      onClick={handleCloseNavMenu}
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem>
                        <ListItemIcon sx={{ color: "#151314" }}>
                          {page.icon}
                        </ListItemIcon>
                        <Typography textAlign="center" color={"#5e5a58"}>
                          {page.title}
                        </Typography>
                      </MenuItem>
                    </Link>
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
