import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className={props.className}>
      <Container maxWidth="sm" align="center">
        <Breadcrumbs separator="" variant="body2" className="nav">
          <Link
            color="inherit"
            href="https://www.kakao.com/policy/terms?lang=ko"
          >
            이용약관
          </Link>
          <Link
            color="inherit"
            href="https://www.kakao.com/policy/privacy?lang=ko"
          >
            <b>개인정보 처리방침</b>
          </Link>
          <Link
            color="inherit"
            href="https://www.kakao.com/policy/oppolicy?lang=ko"
          >
            운영정책
          </Link>
          <Link color="inherit" href="https://cs.kakao.com/">
            고객센터
          </Link>
          <Link color="inherit" href="https://www.kakao.com/notices?lang=ko">
            공지사항
          </Link>
          <Link color="inherit" href="">
            한국어
          </Link>
        </Breadcrumbs>
        <Typography variant="caption" color="textSecondary">
          {"Copyright © "}
          <Link color="inherit" href="https://www.kakaocorp.com/">
            <b>Kakao Corp.</b>
          </Link>
          {" All rights reserved."}
        </Typography>
      </Container>
    </footer>
  );
}
