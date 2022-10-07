import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const move = keyframes`
  0% {
    backgroun-position: left;
  }
  100% {
    background-position: right;
  }
`;

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        //background: "linear-gradient(45deg, #4C212A, #ACF39D, #EABDA8, #ACF39D)",
        //background: "linear-gradient(45deg, #4C212A, #ACF39D, #24d292)",

        background: "linear-gradient(45deg,#d558c8, #24d292)",
        backgroundSize: "200%",
        animation: `${move} 20s infinite alternate`,
      }}
    >
      <Typography
        variant="h3"
        sx={{ color: "white", marginBottom: 4}}
      >
        Hi! I'm Franca | FullStack Developer
      </Typography>
      <Typography
        sx={{ color: "white", fontFamily: "monospace",
        fontWeight: 400,
        letterSpacing: ".3rem", }}
      >
        I love creating fun things
      </Typography>
    </Box>
  );
};

export default Home;
