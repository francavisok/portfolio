import { Box, Typography, useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import React, { useEffect, useState } from "react";

const move = keyframes`
  0% {
    backgroun-position: left;
  }
  100% {
    background-position: right;
  }
`;

const Home = () => {
  const [checked, setChecked] = useState(false);

  const isNotSmallerScreen = useMediaQuery("(min-width:740px)");

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Box
      padding={3}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background: "linear-gradient(45deg, #D0E37F, #FFB585)",
        backgroundSize: "400%",
        animation: `${move} 5s infinite alternate`,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#151314",
          marginBottom: 4,
          fontWeight: "700",
          textShadow: "2px 3px #F5F4EB",
        }}
      >
        Hi! I'm Franca | FullStack Developer
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant={isNotSmallerScreen ? "h6" : "body1"}
          sx={{
            color: "#151314",
            fontFamily: "monospace",
            borderRight: ".15em solid #151314",
            fontWeight: 400,
            letterSpacing: ".3rem",
            overflow: "hidden",
            whiteSpace: "nowrap",
            animation:
              "typing 3s steps(40, end), blink-caret .75s step-end infinite",
            "@keyframes typing": {
              from: {
                width: 0,
              },
              to: {
                width: "100%",
              },
            },
            "@keyframes blink-caret": {
              "from, to": { borderColor: "transparent" },
              "50%": { borderColor: "#151314" },
            },
          }}
        >
          I love creating fun things
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
