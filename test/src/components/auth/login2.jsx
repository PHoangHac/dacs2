import React, { useState } from "react";
import "./auth.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const Navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7070/login", {
        username: username,
        password: password,
      });
      alert("Login successful !");
      Navigate("/Alluser");
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };

  return (
    <div className="login-main">
      <h1>Login</h1>
      <p>{msg}</p>
      <form onSubmit={Login} action="">
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
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login2;
