import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Button, Typography } from "@material-ui/core";
import main from "./main.png";

export default function Main() {
  return (
    <Container maxWidth="sm">
      <Typography component="h2" variant="h5">
        카카오계정 하나로 충분합니다.
      </Typography>
      <Typography variant="body2">
        Kakao의 모든 서비스 뿐 아니라 Melon, Daum등 다른 다양한 서비스까지
        <br /> 이제 카카오계정으로 이용해 보세요!
      </Typography>
      <img src={main} alt="" width="100%" />
      <div className="btns">
        {sessionStorage.getItem("login") == null ? (
          <>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              fullWidth
              component={Link}
              to="/signin"
            >
              로그인
            </Button>
            <div className="hr-sect">
              <span>또는</span>
            </div>
            <Button
              variant="contained"
              size="large"
              disableElevation
              fullWidth
              component={Link}
              to="/signup"
            >
              회원가입
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            disableElevation
            fullWidth
            component={Link}
            to="/userlist"
          >
            회원목록 조회
          </Button>
        )}
      </div>
    </Container>
  );
}
