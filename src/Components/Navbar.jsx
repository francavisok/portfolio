import React, { useState } from "react";
//import react-router-dom
import { Link } from "react-router-dom";
//cv imports
import spanishCV from "../assets/Franca_Visokolskis_Es.pdf";
import englishCV from "../assets/Franca_Visokolskis_En.pdf";

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
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//React Icons
import { FaUserCircle, FaFolderOpen, FaCloudDownloadAlt } from "react-icons/fa";
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

  //download cv dialog
  const handleDownloadClick = () => {
    handleClickOpen();
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Box
          maxWidth="xl"
          paddingX={3}
          sx={{ margin: "0 auto", width: "100%" }}
        >
          <Toolbar disableGutters>
            <Link to='/' style={{textDecoration: "none", color: 'unset'}}>
              <Typography
                noWrap
                sx={{
                  fontSize: "1rem",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                {isNotSmallerScreen ? "Franca Visokolskis" : "Franca V."}
              </Typography>
            </Link>

            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "end",
              }}
            >
              {isNotSmallerScreen ? (
                <>
                  {pages.map((page) => (
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
                  ))}
                  <Button
                    sx={{
                      py: 2,
                      px: 4,
                      color: "white",
                      display: "block",
                      ":hover": { color: "#FFB585", transition: "0.4s" },
                    }}
                    onClick={handleDownloadClick}
                  >
                    Download CV
                  </Button>
                </>
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
                    <Divider />
                    <MenuItem onClick={handleDownloadClick}>
                      <ListItemIcon sx={{ color: "#151314" }}>
                        <FaCloudDownloadAlt />
                      </ListItemIcon>
                      <Typography textAlign="center" sx={{ color: "#151314" }}>
                        Download CV
                      </Typography>
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ color: "#151314", textAlign: "center" }}
        >
          {"Download CV"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please choose a language
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Box
            component={"a"}
            href={spanishCV}
            download
            sx={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              sx={{
                ":hover": { backgroundColor: "#FFB585", transition: "0.4s" },
              }}
              autoFocus
            >
              Spanish
            </Button>
          </Box>
          <Box
            component={"a"}
            href={englishCV}
            download
            sx={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              sx={{
                ":hover": { backgroundColor: "#FFB585", transition: "0.4s" },
              }}
              autoFocus
            >
              English
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
