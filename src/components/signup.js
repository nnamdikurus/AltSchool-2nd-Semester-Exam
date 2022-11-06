import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/signup.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%]){8,24}$/;

function Signup() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [PwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [MatchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);



  return (
    <section className="container">
        <p ref={errRef} className={errMsg ? "errmsg": "offscreen"}>{errMsg}</p>
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

      <div className="user-pass">
        <p className="create-acc">CREATE ACCOUNT</p>
        <p>Username</p>
        <input
          className="user-input"
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e)=>setUser(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={()=>setUserFocus(true)}
          onBlur={()=>setUserFocus(false)}
          placeholder="Enter Username"
        ></input>
        <p>Password</p>
        <input
          className="user-input"
          type="text"
          placeholder="Enter password"
        ></input>
        <p>Confirm Password</p>
        <input
          className="user-input"
          type="text"
          placeholder="Re-enter password"
        ></input>
        <p>
          <button className="sign-btn">Create Account</button>
        </p>
      </div>
    </section>
  );
}

export default Signup;
