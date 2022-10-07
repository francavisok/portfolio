import React from "react";
import { Stack, Typography, Container, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:600px)");

  const iconsContact = [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/franca-visokolskis/",
    },
    { icon: <GitHubIcon />, link: "https://github.com/francavisok" },
    { icon: <EmailIcon />, link: "mailto:francavisokolskis@gmail.com" },
  ];
  return (
    <Grid
      container
      rowGap={3}
      justifyContent="start"
      alignItems="center"
      sx={{
        backgroundColor: "#8a817c",
        color: "#F7F0F5",
        p: 4,
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            cursor: "pointer",
            minWidth: "180px",
          }}
        >
          Franca V.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} order={{ md: 3 }}>
        <Stack
          flexDirection={"row"}
          gap={4}
          justifyContent={isNotSmallerScreen ? "end" : "start"}
        >
          {iconsContact.map((iconObj, i) => (
            <Box
              component="a"
              href={iconObj.link}
              target="_blank"
              key={i}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              {iconObj.icon}
            </Box>
          ))}
        </Stack>
      </Grid>
      <Grid item md={4}>
        <Typography variant="caption">
          2022 | Created and design by Franca Visokolskis
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
