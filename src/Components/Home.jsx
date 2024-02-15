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
  const isNotSmallerScreen = useMediaQuery("(min-width:740px)");

  const [text, setText] = useState("");

  const originalString = "I  love creating fun things";

  const interval = 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prev) => {
        if (prev.length >= originalString.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + originalString[prev.length];
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [useState]);

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
            ":after": {
              content: '"|"',
              animation: " blink-caret .75s step-end infinite",
              "@keyframes blink-caret": {
                "from, to": { opacity: 0 },
                "50%": { opacity: 1 },
              },
            },
            color: "#151314",
            fontFamily: "monospace",
            fontWeight: 400,
            letterSpacing: ".3rem",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
// I love creating fun things
