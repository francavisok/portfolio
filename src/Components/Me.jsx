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
              variant="h6"
              sx={{
                color: "#F5F4EB",
                marginBottom: 4,
                fontWeight: "700",
              }}
            >
              I am a Full Stack Developer, Fashion Designer and Downhill |
              Enduro racer. At first it may seem like a strange mix, but without
              one of these things in my life I would probably have none.
            </Typography>
          </Box>

          <Typography>
            As with Developing, I found mountain biking late in life (2013, 26
            years old). It is a sport which requires a lot of technique,
            concentration and dedication. From the first day I fell in love with
            it and changed my lifestyle completely since I wasn't much of a
            sports person and by 2019 I became Argentina's downhill champion.
            <br />
            <br />
            During 2016 I decided to combine my love for sports and design and
            created my own clothing brand for MTB. I always liked change and
            challenges in life, and in 2019 I decided to take a year off to go
            to France to learn the language. By the time the pandemic arrived I
            found myself with extra time and decided to try and create a website
            for my brand. This led me to a series of online courses and the
            quick realization that programming was a fascinating line of work
            where I could mix creativity with challenging logic.
            <br />
            <br />
            In late 2021 I made the decision to quit my job and go back to
            Argentina to attend Plataforma 5 JavaScript coding bootcamp. This
            course not only taught me everything I wanted to learn but made me
            grow as a person thanks to the great group of people that were
            involved. I am now looking for a Front end job where I can
            contribute everything I've learned from all my experiences and
            continue to improve in this new passion with the same conviction and
            dedication as I am used to.
          </Typography>
          <Link to='/contact' style={{textDecoration: "none", color: 'unset'}}>
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
