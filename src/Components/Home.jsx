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
      padding={3}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        //background: "linear-gradient(45deg, #4C212A, #ACF39D, #EABDA8, #ACF39D)",
        //background: "linear-gradient(45deg, #4C212A, #ACF39D, #24d292)",
        //background: "linear-gradient(45deg,#d558c8, #24d292)",
        //background: "linear-gradient(45deg, #4C212A, #8A817C, #ACF39D)",
        background: "linear-gradient(45deg, #D0E37F, #FFB585)",

        backgroundSize: "400%",
        animation: `${move} 5s infinite alternate`,
      }}
    >
      <Typography variant="h3" sx={{ color: "#151314", marginBottom: 4, fontWeight: '700', textShadow: '2px 3px #F5F4EB' }}>
        Hi! I'm Franca | FullStack Developer
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#151314",
          fontFamily: "monospace",
          fontWeight: 400,
          letterSpacing: ".3rem",
        }}
      >
        I love creating fun things
      </Typography>
    </Box>
  );
};

export default Home;
