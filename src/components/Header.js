import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./Header.css";
import Logo from "./Logo";

export default function Header({ history }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const signOut = async () => {
    await axios.get("/api/users/logout").then((data) => {
      console.log(data);
      sessionStorage.removeItem("login");
      alert(data.data);
      history.replace("/");
    });
  };

  return (
    <header className="header">
      <Toolbar>
        <Typography component="h2" variant="h5">
          <Logo />
        </Typography>
        <nav className="nav">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            // textColor="primary"
          >
            <Tab label="메인" component={Link} to="/" />
            <Tab label="목록" component={Link} to="/userlist" />
            {sessionStorage.getItem("login") != null && (
              <Tab label="정보수정" component={Link} to="/update" />
            )}
          </Tabs>
        </nav>
        <ButtonGroup>
          {sessionStorage.getItem("login") == null ? (
            <Button
              variant="outlined"
              size="small"
              component={Link}
              to="/signin"
              onClick={() => setValue(-1)}
            >
              Sign in
            </Button>
          ) : (
            <Button
              variant="outlined"
              size="small"
              component={Link}
              to="/signin"
              onClick={signOut}
            >
              Sign out
            </Button>
          )}
        </ButtonGroup>
      </Toolbar>
    </header>
  );
}
