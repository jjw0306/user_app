import React from "react";
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
import Link from "@material-ui/core/Link";

import Logo from "./Logo";
import "./SignIn.css";
import { Button } from "@material-ui/core";

export default function SignIn() {
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

  let yearList = Array.from(
    { length: 100 },
    (x, i) => new Date().getFullYear() - 14 - i
  );
  let monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Container maxWidth="sm">
      <Typography component="h2" variant="h5" align="center">
        <Logo />
      </Typography>
      <Paper className="paper logo" variant="outlined" square>
        <Typography component="h2" variant="h5">
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
            />
            <div className="email_chk">
              <Typography variant="caption">
                {/* <Link color="inherit" href="#" underline="always">
                  인증메일을 받지 못하셨나요?
                </Link> */}
              </Typography>
              <Button variant="outlined">인증메일 발송</Button>
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
            <Input
              className="input"
              placeholder="비밀번호 재입력"
              type="password"
              name="password_confirm"
              id="password_confirm"
              required
              fullWidth
            />
          </div>
          <div className="form_group">
            <Typography variant="caption" color="textPrimary">
              <b>닉네임</b>
            </Typography>
            <Input
              placeholder="닉네임을 입력해주세요."
              name="text"
              id="text"
              required
              fullWidth
            />
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
          </div>
          <div className="form_group">
            <Button
              type="submit"
              variant="contained"
              size="large"
              disableElevation
              fullWidth
              onClick={() =>
                console.log(new FormData(document.getElementById("signup")))
              }
            >
              다음
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
}
