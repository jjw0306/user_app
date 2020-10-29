import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, TableHead, Typography } from "@material-ui/core";

import "./UserList.css";

export default function UserList({ history }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/users")
      .then((data) => {
        // console.log(data);
        setUserList(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.response.data);
        history.replace("/signin");
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Paper className="paper" variant="outlined" square>
        <Typography component="h2" variant="h4" align="center">
          회원목록
        </Typography>
        <TableContainer>
          <Table aria-label="custom pagination table" className="table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
              </TableRow>
            </TableHead>
            {isLoading ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {userList.map((user) => (
                  <TableRow>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.birthday}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
            <TableFooter>
              <TableRow></TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
