import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  return (
    <section className="container">
      <div className="tool-bar">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/users">Users</Link>
        </p>
        <p>
          <Link to="/characters">Characters</Link>
        </p>
      </div>
      <hr />
      <p className="log-details">LOGIN DETAILS</p>
      <div className="user-pass">
        <p>USERNAME</p>
        <p>
          <input
            className="user-input"
            type="text"
            placeholder="Enter Email address or Username"
          ></input>
        </p>
        <p>PASSWORD</p>
        <p>
          <input
            className="pass-input"
            type="text"
            placeholder="Enter Password"
          ></input>
        </p>
        <button className="log-btn">SIGN IN</button>
      </div>
    </section>
  );
}

export default Login;
