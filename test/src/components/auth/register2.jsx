import React, { useState } from "react";
import "./auth.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register2 = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatpassword] = useState("");
  const [msg, setMsg] = useState("");

  const Nagigate = useNavigate();

  const RegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7070/Users/create", {
        username: username,
        email: email,
        phonenumber: phonenumber,
        password: password,
        repeatPassword: repeatPassword,
      });
      alert("Register successful !");
      Nagigate("/Login");
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };

  return (
    <div className="regis-main">
      <h1>Register</h1>
      <p>{msg}</p>
      <form onSubmit={RegisterSubmit} action="">
        <div>
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username...."
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email...."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phonenumber: </label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            placeholder="phonenumber...."
            value={phonenumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password...."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="repeatPassword">ConfPassword: </label>
          <input
            type="text"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="repeatpassword...."
            value={repeatPassword}
            onChange={(e) => {
              setRepeatpassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Register2;
