import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import SvgIcon from "@material-ui/core/SvgIcon";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import Logo from "./Logo";
import "./SignIn.css";
import { Button } from "@material-ui/core";

export default function SignIn({ history }) {
  const signIn = async () => {
    document.getElementById(`error_login`).innerText = "";

    const user = {};
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    console.log(user);

    await axios
      .post("/api/users/login", user)
      .then((data) => {
        console.log(data.data);
        alert("로그인 되었습니다.");
        sessionStorage.setItem("login", JSON.stringify(data.data));
        console.log(sessionStorage.getItem("login"));
        // router로 페이지 이동
        history.replace("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        document.getElementById(`error_login`).innerText =
          "이메일 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";
        // error.response.data.defaultMessage;
      });
  };

  return (
    <Container maxWidth="xs">
      <Paper className="paper" variant="outlined" square>
        <Typography component="h2" variant="h5">
          <Logo />
        </Typography>
        <form className="form">
          <Input
            className="input"
            placeholder="카카오계정 (이메일 또는 전화번호)"
            required
            fullWidth
            id="email"
            name="email"
          />
          <Input
            className="input"
            placeholder="비밀번호"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
          />
          <FormControlLabel
            className="input"
            control={
              <Checkbox
                color="primary"
                icon={<CircleChecked color="disabled" />}
                checkedIcon={<CircleCheckedFilled />}
                name="checkedH"
              />
            }
            // label="로그인 상태 유지"
            label={<Typography variant="body2">로그인 상태 유지</Typography>}
          />
          <Typography
            component="p"
            variant="caption"
            color="error"
            className="error_msg"
            id="error_login"
          ></Typography>
          <div className="btns">
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              fullWidth
              onClick={signIn}
            >
              로그인
            </Button>
            <div className="hr-sect">
              <span>또는</span>
            </div>
            <Button variant="contained" size="large" disableElevation fullWidth>
              <SvgIcon fontSize="small">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M9.5,6.5v3h-3v-3H9.5 M11,5H5v6h6V5L11,5z M9.5,14.5v3h-3v-3H9.5 M11,13H5v6h6V13L11,13z M17.5,6.5v3h-3v-3H17.5 M19,5h-6v6 h6V5L19,5z M13,13h1.5v1.5H13V13z M14.5,14.5H16V16h-1.5V14.5z M16,13h1.5v1.5H16V13z M13,16h1.5v1.5H13V16z M14.5,17.5H16V19h-1.5 V17.5z M16,16h1.5v1.5H16V16z M17.5,14.5H19V16h-1.5V14.5z M17.5,17.5H19V19h-1.5V17.5z M22,7h-2V4h-3V2h5V7z M22,22v-5h-2v3h-3v2 H22z M2,22h5v-2H4v-3H2V22z M2,2v5h2V4h3V2H2z"
                />
              </SvgIcon>
              QR코드 로그인
            </Button>
          </div>
        </form>
        <div className="join">
          <Typography
            variant="caption"
            color="inherit"
            component={Link}
            to="/signup"
          >
            {/* <Link href="/signup">회원가입</Link> */}
            회원가입
          </Typography>
          <Breadcrumbs separator="|" variant="caption">
            {/* <Link color="inherit" href="#">
              카카오계정
            </Link>
            <Link color="inherit" href="#">
              비밀번호 찾기
            </Link> */}
            <span>카카오계정</span>
            <span>비밀번호 찾기</span>
          </Breadcrumbs>
        </div>
      </Paper>
    </Container>
  );
}
