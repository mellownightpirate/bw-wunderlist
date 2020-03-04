import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter, NavLink } from "react-router-dom";

const Login = props => {
  const initialUserCreds = {
    email: "",
    password: ""
  };

  const [userCreds, setuserCreds] = useState(initialUserCreds);

  const onHandleChange = event => {
    setuserCreds({
      ...userCreds,
      [event.target.name]: event.target.value
    });
  };

  const onLogin = event => {
    event.preventDefault();
    const test = userCreds 
    axiosWithAuth()
      .post("/auth/login", userCreds)
      .then(res => {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("userId", res.data.user.id);
        alert(res.data.message);
        setuserCreds(initialUserCreds);
        props.history.push("/todo-list");
      })
      .catch(err => err);
  };

  return (
    <div className="loginForm">
      <p>{userCreds.email}</p>
      <form noValidate autoComplete="off" onSubmit={onLogin}>
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={userCreds.email}
          onChange={onHandleChange}
          type="text"
        />

        <TextField
          label="Password"
          variant="outlined"
          name="password"
          value={userCreds.password}
          onChange={onHandleChange}
          type="password"
        />
        <br />
        <Button type="submit" margin="normal">LOGIN</Button>
      </form>
      <NavLink exact to="/Register">
        Don't have an account ? Sign up!
      </NavLink>
    </div>
  );
};

export default withRouter(Login);
