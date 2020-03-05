import React from "react";
import { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const Register = props => {
  const initialSignup = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  const [signup, setSignup] = useState(initialSignup);

  const onRegister = event => {
    setSignup({
      ...signup,
      [event.target.name]: event.target.value
    });
  };

  const RegisterNewUser = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("auth/register", {
        first_name: signup.firstName,
        last_name: signup.lastName,
        email: signup.email,
        password: signup.password
      })
      .then(res => {
        window.localStorage.setItem("token", res.data.token);
         
        props.history.push("/");
        setSignup(initialSignup);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="loginForm">
      <form noValidate autoComplete="off" onSubmit={RegisterNewUser}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          margin="normal"
          name="firstName"
          value={signup.firstName}
          onChange={onRegister}
          type="text"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          margin="normal"
          name="lastName"
          value={signup.lastName}
          onChange={onRegister}
          type="text"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          name="email"
          value={signup.email}
          onChange={onRegister}
          type="text"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="normal"
          name="password"
          value={signup.password}
          onChange={onRegister}
          type="password"
        />
        <br />
        <Button
          type="submit"
          margin="normal"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default withRouter(Register);
