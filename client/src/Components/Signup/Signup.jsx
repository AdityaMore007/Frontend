import React, { useState } from "react";
import SignupCSS from "./Signup.module.css";

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className={`${SignupCSS.signup} section auth-container`}>
      <div className={SignupCSS.authToggle}>
        <button
          className={isSignup ? SignupCSS.active : ""}
          onClick={() => setIsSignup(true)}
        >
          Sign Up
        </button>
        <button
          className={!isSignup ? SignupCSS.active : ""}
          onClick={() => setIsSignup(false)}
        >
          Login
        </button>
      </div>

      <div className={SignupCSS.authForm}>
        {isSignup ? (
          <form>
            <h1 className={SignupCSS.formTitle}>Sign Up</h1>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form>
            <h1 className={SignupCSS.formTitle}>Login</h1>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
;
