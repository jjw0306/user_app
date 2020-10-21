import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import Logo from "./Logo";
import "./SignIn.css";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    // minWidth:""
  },
}));

export default function SignIn() {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} variant="outlined" square>
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
                icon={<CircleChecked />}
                checkedIcon={<CircleCheckedFilled />}
                name="checkedH"
              />
            }
            label="로그인 상태 유지"
          />
          <div className="btns">
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              fullWidth
            >
              로그인
            </Button>
            <div class="hr-sect">
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
          <Typography variant="caption">
            <Link color="inherit">회원가입</Link>
          </Typography>
          <Breadcrumbs separator="|" variant="caption">
            <Link
              color="inherit"
              href="https://www.kakao.com/policy/terms?lang=ko"
            >
              카카오계정
            </Link>
            <Link
              color="inherit"
              href="https://www.kakao.com/policy/privacy?lang=ko"
            >
              비밀번호 찾기
            </Link>
          </Breadcrumbs>
        </div>
      </Paper>
    </Container>
  );
}
