import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";
import UserList from "./components/UserList";
import Main from "./components/Main";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./components/Layout.css";
import CssBaseline from "@material-ui/core/CssBaseline";
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

// function Home() {
//   return (
//     <Layout>
//       <SignIn />
//     </Layout>
//   );
// }
// function Test1() {
//   return (
//     <Layout>
//       <SignUp />
//     </Layout>
//   );
// }
// function Test2() {
//   return (
//     <Layout>
//       <UserList />
//     </Layout>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="layout">
          <CssBaseline />
          {/* <Header /> */}
          <Route path="" component={Header} />
          <Route path="/" exact={true} component={Main} />
          <Route path="/signup" exact={true} component={SignUp} />
          <Route path="/signin" exact={true} component={SignIn} />
          <Route path="/userlist" exact={true} component={UserList} />
          <Route path="/update" exact={true} component={SignUp} />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
