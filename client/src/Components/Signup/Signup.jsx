import React, { useContext, useState } from "react";
import axios from "axios";

import SignupCSS from "./Signup.module.css"; // Ensure you have the correct CSS file imported
import UserContext from "../../Context/UserContext";

const Signup = () => {

  const { login} = useContext(UserContext)
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      // alert("Sign-up successful!");
      if(response.success){

        login(response.user);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error during sign-up:", error.response?.data || error.message);
      alert("Sign-up failed. Please try again.");
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signin", {
        email: formData.email,
        password: formData.password,
      });
      // alert("Login successful!");
      console.log(response.data);
      // Save the token or user info to localStorage or context if required
      if(response.success){

        login(response.user);
      }
      // localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

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
          <form onSubmit={handleSignup}>
            <h1 className={SignupCSS.formTitle}>Sign Up</h1>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form onSubmit={handleSignin}>
            <h1 className={SignupCSS.formTitle}>Login</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;




