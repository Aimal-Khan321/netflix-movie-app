import React, { useRef, useState } from "react";
import "./register.scss";


const Register = () => {

  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }
  return (
    <div className="register">
    
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows, more</h1>
        <h2>watch anywhere, cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restarte your
          memberhship
        </p>

        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
