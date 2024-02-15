import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider, styled, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

let theme = createTheme({
  palette: {
    primary: {
      main: "#151314",
      //main: "#5e5a58",

    },
    secondary: {
      main: "#acf39d",
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu',
      'sans-serif',
    ].join(','),
    allVariants: {
      color:  '#F5F4EB',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        }
      }
    }
  }
  
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
