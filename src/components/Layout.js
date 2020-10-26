import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./Header";
import Footer from "./Footer";

import "./Layout.css";

// primary color 변경
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffe500",
    },
  },
  overrides: {
    MuiMenu: {
      paper: {
        height: "200px",
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "2px solid #ebebeb",
        },
      },
      input: {
        padding: "11px 0",
        caretColor: "#ffe500",
      },
    },
    MuiFormControlLabel: {
      root: {
        marginRight: "40px",
      },
    },
  },
});

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="layout">
        <CssBaseline />
        <Header className="header" />
        <div>{props.children}</div>
        <Footer className="footer" />
      </div>
    </ThemeProvider>
  );
}
