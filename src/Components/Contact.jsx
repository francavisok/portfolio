import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactForm from "../Commons/ContactForm";
import Fade from "@mui/material/Fade";

const Contact = () => {
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
        }}
      >
        <Stack
          direction={isNotSmallerScreen ? "row" : "column"}
          width={isNotSmallerScreen ? "65%" : "90%"}
          maxWidth="820px"
          height={isNotSmallerScreen ? "90%" : "auto"}
          sx={{
            backgroundColor: "#f5f5f7",
          }}
        >
          <Box
            height={isNotSmallerScreen ? "100%" : "25%"}
            minWidth={isNotSmallerScreen ? "40%" : "100%"}
            sx={{
              padding: 2,
              textAlign: "center",
              rowGap: 4,
              backgroundColor: "#FFB585",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#151314",
                border: "2px solid #151314",
                padding: 3,
                boxShadow: "4px 4px 0 #151314",
              }}
            >
              Let's get in touch
            </Typography>
            {isNotSmallerScreen && (
              <>
                <Typography sx={{ fontSize: "0.90rem", color: "#151314" }}>
                  I'm happy to answer any questions you may have...
                </Typography>
                <Typography sx={{ fontSize: "0.90rem", color: "#151314" }}>
                  You can also find me in LinkedIn
                </Typography>
                <Box
                  component="a"
                  href="https://www.linkedin.com/in/franca-visokolskis/"
                  target="_blank"
                  sx={{ textDecoration: "none", color: "#f5f5f7" }}
                >
                  <LinkedInIcon
                    sx={{
                      color: "#151314",
                      ":hover": { fontSize: "2rem", transition: "0.2s" },
                    }}
                  />
                </Box>
                <Typography sx={{ fontSize: "0.90rem", color: "#151314" }}>
                  Or check my work in GitHub
                </Typography>
                <Box
                  component="a"
                  href="https://github.com/francavisok"
                  target="_blank"
                  sx={{ textDecoration: "none", color: "#f5f5f7" }}
                >
                  <GitHubIcon
                    sx={{
                      color: "#151314",
                      ":hover": { fontSize: "2rem", transition: "0.4s" },
                    }}
                  />
                </Box>
              </>
            )}
          </Box>
          <Box sx={{ width: "100%" }}>
            <ContactForm />
          </Box>
        </Stack>
      </Box>
    </Fade>
  );
};

export default Contact;
