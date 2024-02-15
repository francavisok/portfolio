import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Stack, keyframes } from "@mui/system";
import React, { useEffect, useState } from "react";
import ContactForm from "../Commons/ContactForm";

const move = keyframes`
0% {
  backgroun-position: left;
}
100% {
  background-position: right;
}
`;

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
              paddingY: isNotSmallerScreen ? 2 : 4,
              paddingX: 6,
              rowGap: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: isNotSmallerScreen ? "flex-start" : "center",
              justifyContent: "center",
              background: "linear-gradient(45deg, #D0E37F, #FFB585)",
              backgroundSize: "400%",
              animation: `${move} 5s infinite alternate`,
            }}
          >
            <Typography
              variant={isNotSmallerScreen ? "h3" : "h4"}
              sx={{
                color: "#151314",
                marginBottom: isNotSmallerScreen ? 4 : 0,
                fontWeight: "700",
                textShadow: "2px 3px #F5F4EB",
                // textAlign:'start',
              }}
            >
              Would love to hear from you.
            </Typography>
            {isNotSmallerScreen && (
              <>
                <Box
                  component="a"
                  href="https://www.linkedin.com/in/franca-visokolskis/"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    color: "#f5f5f7",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <LinkedInIcon
                    sx={{
                      color: "#151314",
                    }}
                  />
                  <Typography sx={{ fontSize: "0.90rem", color: "#151314" }}>
                    Visit my LinkedIn.
                  </Typography>
                </Box>

                <Box
                  component="a"
                  href="https://github.com/francavisok"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    color: "#f5f5f7",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <GitHubIcon
                    sx={{
                      color: "#151314",
                    }}
                  />
                  <Typography sx={{ fontSize: "0.90rem", color: "#151314" }}>
                    Or check out my work on GitHub.
                  </Typography>
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
