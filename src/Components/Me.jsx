import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import francaPhoto from "../../src/assets/francapp.jpeg";
import { Link } from "react-router-dom";

const Me = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Fade in={checked} timeout={{ enter: 1000, exit: 250 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingY: 8,
        }}
      >
        <Box
          width={isNotSmallerScreen ? "65%" : "90%"}
          minWidth={isNotSmallerScreen ? "750px" : "90%"}
          maxWidth="820px"
          padding={isNotSmallerScreen ? 8 : 4}
          sx={{
            border: "2px solid #FFB585",
            boxShadow: "8px 7px #FFB585",
          }}
        >
          <Box
            flexDirection={isNotSmallerScreen ? "row" : "column"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: 200,
                height: "auto",
                border: "2px solid #FFB585",
                boxShadow: "8px 7px #FFB585",
                marginRight: 4,
                marginBottom: 4,
              }}
              alt="Hi ! I'm Franca !"
              src={francaPhoto}
            />
            <Typography
              variant="h7"
              sx={{
                color: "#F5F4EB",
                marginBottom: 4,
                fontWeight: "600",
              }}
            >
              I am a versatile professional, combining skills as a Full Stack
              Developer with a background in Fashion Design and a passion for
              Downhill | Enduro racing. Originally from Argentina, Cordoba, I've
              had the privilege of calling the US, France, and Spain home. My
              love for travel is deeply intertwined with my desire to reside
              near the mountains, where I can seamlessly blend my work and
              favorite sports.
            </Typography>
          </Box>

          <Typography>
            Having lived and worked in diverse locations, I've not only honed my
            technical expertise but also cultivated an appreciation for
            different languages and cultures. This unique journey allows me to
            integrate a rich tapestry of experiences into my work.
            <br />
            <br />
            As a responsible and sociable individual, I thrive on learning and
            embrace challenges in my projects. Passion fuels my endeavors, and I
            take pride in pushing my limits to deliver exceptional results.
          </Typography>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#F5F4EB",
                textAlign: "center",
                marginTop: 5,
                fontWeight: "700",
                padding: 2,
                border: "2px solid #FFB585",
                boxShadow: "8px 7px #FFB585",
                transition: "0.4s",
                ":hover": { fontSize: "1.5rem", transition: "0.4s" },
                
              }}
            >
              Let's talk !
            </Typography>
          </Link>
        </Box>
      </Box>
    </Fade>
  );
};

export default Me;
