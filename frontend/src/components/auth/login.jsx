import React, { useState } from "react";

const Login = () => {
  const [showpass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showpass);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  return (
    <div className="login-contain">
      <form onSubmit={onSubmit} action="">
        <h1 id="login-content">Login</h1>
        <div className="login-input">
          <div id="input-item">
            <label htmlFor="username">Username: </label>
            <input
              name="username"
              className="inputs"
              id="username"
              type="text"
              placeholder="Username....."
            />
          </div>
          <div id="input-item">
            <label htmlFor="Password">Password: </label>
            <input
              name="password"
              className="inputs"
              id="Password"
              type={showpass ? "text" : "password"}
              placeholder="Password......"
            />
            <br></br>
            <div className="show-pass">
              <input className="checkbox-show" id="showpass" type="checkbox" />
              <label htmlFor="showpass">ShowPass</label>
            </div>
          </div>
        </div>
        <div className="login-submit">
          <button type="submit" id="login-submits">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
