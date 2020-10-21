import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="kakao"></img>
    </Link>
  );
}
