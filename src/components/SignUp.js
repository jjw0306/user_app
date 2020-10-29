import React, { useEffect, useState } from "react";
import axios from "axios";

import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Logo from "./Logo";
import "./SignIn.css";
import { Button } from "@material-ui/core";

export default function SignIn({ history }) {
  const [gender, setGender] = React.useState("none");
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const [year, setYear] = React.useState("");
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };
  const [month, setMonth] = React.useState("");
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const [date, setDate] = React.useState("");
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const yearList = Array.from(
    { length: 100 },
    (x, i) => new Date().getFullYear() - 14 - i
  );
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("login") != null) {
      const user = JSON.parse(sessionStorage.getItem("login"));
      console.log(user);

      document.getElementById("title").innerText = "수정할 정보를 입력해주세요";

      document.getElementById("email").value = user.email;
      // document.getElementById("email").readOnly = true;
      setDisabled(true);
      document.getElementsByClassName("email_chk")[0].style.display = "none";

      document.getElementById("name").value = user.name;

      if (user.birthday != null) {
        const birthday = user.birthday.split("-");
        setYear(birthday[0]);
        setMonth(parseInt(birthday[1]));
        setDate(parseInt(birthday[2]));
      }

      setGender(user.gender);
    }
  }, []);

  const signUp = async () => {
    // 에러 메시지 초기화
    const list = document.getElementsByClassName("msg");
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      element.innerText = "";
    }

    // 데이터 준비
    const user = {};
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    user.name = document.getElementById("name").value;
    user.birthday =
      year && month && date
        ? `${year}-${month < 10 ? "0" + month : month}-${
            date < 10 ? "0" + date : date
          }`
        : null;
    user.gender = gender;
    console.log(user);

    //rest api에 post 요청 보내고 결과 처리
    await axios
      .post("/api/users", user)
      .then((data) => {
        console.log(data);
        alert("회원가입이 완료되었습니다.");
        // router로 페이지 이동
        history.replace("/signin");
      })
      .catch((error) => {
        console.log(error.response.data);
        error.response.data.map((e) =>
          document.getElementById(`error_${e.field}`).innerText === "" ||
          e.code === "NotEmpty"
            ? (document.getElementById(`error_${e.field}`).innerText =
                e.defaultMessage)
            : console.log(e.code)
        );
      });
  };

  const update = async () => {
    const list = document.getElementsByClassName("msg");
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      element.innerText = "";
    }

    const user = {};
    user.password = document.getElementById("password").value;
    if (user.password === "") {
      document.getElementById("error_password").innerText =
        "비밀번호를 입력해주세요.(영문자/숫자/특수문자)";
      return;
    }
    user.name = document.getElementById("name").value;
    if (user.name === "") {
      document.getElementById("error_name").innerText = "이름을 입력해주세요.";
      return;
    }
    user.birthday =
      year && month && date
        ? `${year}-${month < 10 ? "0" + month : month}-${
            date < 10 ? "0" + date : date
          }`
        : null;
    user.gender = gender;
    if (user.gender === "") {
      document.getElementById("error_gender").innerText =
        "성별을 입력해주세요.";
      return;
    }
    console.log(user);

    await axios
      .put("/api/users", user)
      .then((data) => {
        console.log(data);
        alert("회원정보가 수정되었습니다.");
        sessionStorage.setItem("login", JSON.stringify(data.data));
        console.log(sessionStorage.getItem("login"));
        // router로 페이지 이동
        history.replace("/");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const deleteUser = async () => {
    await axios
      .delete("/api/users")
      .then((data) => {
        console.log(data);
        alert("탈퇴되었습니다.");
        sessionStorage.removeItem("login");
        // router로 페이지 이동
        history.replace("/");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <Container maxWidth="sm" className="sign">
      <Typography component="h2" variant="h5" align="center">
        <Logo />
      </Typography>
      <Paper className="paper logo" variant="outlined" square>
        <Typography component="h2" variant="h5" id="title">
          {/* <Logo /> */}
          카카오계정 정보를 입력해주세요
        </Typography>
        <form id="signup">
          <div className="form_group">
            <Typography variant="caption" color="textPrimary">
              <b>카카오계정 이메일</b>
            </Typography>
            <Input
              placeholder="이메일 주소 입력"
              type="email"
              name="email"
              id="email"
              required
              fullWidth
              disabled={disabled}
            />
            <Typography
              variant="caption"
              color="error"
              className="msg"
              id="error_email"
            ></Typography>
            <div className="email_chk">
              <Typography variant="caption">
                {/* <Link color="inherit" href="#" underline="always">
                  인증메일을 받지 못하셨나요?
                </Link> */}
              </Typography>
              <Button variant="outlined">이메일 중복확인</Button>
              {/* <Button variant="outlined">인증메일 발송</Button> */}
            </div>
          </div>
          <div className="form_group">
            <Typography variant="caption" color="textPrimary">
              <b>비밀번호</b>
            </Typography>
            <Input
              placeholder="비밀번호(8~32자리)"
              type="password"
              name="password"
              id="password"
              required
              fullWidth
            />
            <Typography
              variant="caption"
              color="error"
              className="msg"
              id="error_password"
            ></Typography>
            {/* <Input
              className="input"
              placeholder="비밀번호 재입력"
              type="password"
              name="password_confirm"
              id="password_confirm"
              required
              fullWidth
            /> */}
          </div>
          <div className="form_group">
            <Typography variant="caption" color="textPrimary">
              <b>닉네임</b>
            </Typography>
            <Input
              placeholder="닉네임을 입력해주세요."
              // type="text"
              name="name"
              id="name"
              required
              fullWidth
            />
            <Typography
              variant="caption"
              color="error"
              className="msg"
              id="error_name"
            ></Typography>
          </div>
          <div className="form_group">
            <Typography variant="caption" color="textPrimary">
              <b>생일/성별</b>
            </Typography>
            <div className="selectDate">
              <FormControl>
                <Select
                  name="year"
                  value={year}
                  onChange={handleChangeYear}
                  size="4"
                  displayEmpty
                >
                  <MenuItem value="">년도</MenuItem>
                  {yearList.map((y) => (
                    <MenuItem value={y}>{y}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Select
                  name="month"
                  value={month}
                  onChange={handleChangeMonth}
                  displayEmpty
                >
                  <MenuItem value="">월</MenuItem>
                  {monthList.map((m) => (
                    <MenuItem value={m}>{m}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Select
                  name="date"
                  value={date}
                  onChange={handleChangeDate}
                  displayEmpty
                >
                  <MenuItem value="">일</MenuItem>
                  {Array.from(
                    { length: new Date(year, month, 0).getDate() },
                    (x, i) => i + 1
                  ).map((d) => (
                    <MenuItem value={d}>{d}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <Typography
              variant="caption"
              color="error"
              className="msg"
              id="error_birthday"
            ></Typography>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={handleChangeGender}
            >
              <FormControlLabel
                value="none"
                control={<Radio color="primary" />}
                label={<Typography variant="body2">선택안함</Typography>}
              />
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label={<Typography variant="body2">여성</Typography>}
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label={<Typography variant="body2">남성</Typography>}
              />
            </RadioGroup>
            <Typography
              variant="caption"
              color="error"
              className="msg"
              id="error_gender"
            ></Typography>
          </div>
          <div className="form_group">
            {sessionStorage.getItem("login") == null ? (
              <Button
                // type="submit"
                variant="contained"
                size="large"
                disableElevation
                fullWidth
                onClick={signUp}
              >
                다음
              </Button>
            ) : (
              <>
                <Button
                  // type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disableElevation
                  fullWidth
                  onClick={update}
                >
                  회원정보 수정
                </Button>
                <div className="hr-sect">
                  <span>또는</span>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  fullWidth
                  onClick={deleteUser}
                >
                  회원탈퇴
                </Button>
              </>
            )}
          </div>
        </form>
      </Paper>
    </Container>
  );
}
