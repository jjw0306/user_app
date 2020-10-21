import React from "react";
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

export default function Header(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header className={props.className}>
      <Toolbar>
        <Typography component="h2" variant="h5">
          <Logo />
        </Typography>
        <nav className="nav">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="메인" component={Link} to="/" value="/" />
            <Tab label="목록" component={Link} to="/test1" value="/test1" />
          </Tabs>
        </nav>
        {/* <Breadcrumbs separator="" className="nav">
          <Link to="/" className="a">
            Home
          </Link>
          <Link to="/" className="a">
            List
          </Link>
        </Breadcrumbs> */}
        {/* <Typography className="nav">
        <Link to="/" className="a">
          Home
        </Link>
        <Link to="/" className="a">
          List
        </Link>
      </Typography> */}
        <ButtonGroup>
          <Link to="/" className="a">
            <Button variant="outlined" size="small">
              Sign in
            </Button>
          </Link>
          {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
        </ButtonGroup>
      </Toolbar>
    </header>
  );
}
