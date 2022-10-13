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
    <Box
      sx={{
        backgroundColor: "#151314",
        p: 3,
      }}
    >
      <Grid
        container
        maxWidth="xl"
        rowGap={3}
        sx={{margin: '0 auto'}}
        //justifyContent="start"
        //alignItems="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            sx={{
              fontFamily: "monospace",
              fontWeight: 900,
              fontSize: '1.5rem',
              width: 'fit-content',
              backgroundColor: '#FFB585',
              color: '#151314',
              paddingX: '8px',
              textShadow: '2px 2px #F5F4EB',
              
              //letterSpacing: ".3rem",
              cursor: "pointer",
              //minWidth: "180px",
            }}
          >
            F
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} order={{ md: 3 }}>
          <Stack
            flexDirection={"row"}
            gap={4}
            justifyContent={isNotSmallerScreen ? "end" : "start"}
            sx={{marginRight: 4}}
          >
            {iconsContact.map((iconObj, i) => (
              <Box
                component="a"
                href={iconObj.link}
                target="_blank"
                key={i}
                sx={{ textDecoration: "none", color: '#f5f5f7', ":hover": { color: "#FFB585", transition: "0.2s" } }}
              >
                {iconObj.icon}
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item md={4} sx={{ textAlign: "center" }}>
          <Typography variant="caption" alignSelf={"center"}>
            2022 | Created and designed by Franca Visokolskis
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
