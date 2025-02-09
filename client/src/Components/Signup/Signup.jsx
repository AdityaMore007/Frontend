import React, { useContext, useState } from "react";


import SignupCSS from "./Signup.module.css"; 
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../utils/apiRequest.js";
// import {UserContext} from "../../Context/UserContext";

const Signup = () => {

  const { login } = useContext(UserContext)
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest.post("/auth/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
   
      if(response.data){

        login(response.data);
        navigate('/',{ replace: true })
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error during sign-up:", error.response?.data || error.message);
 
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest.post("/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      console.log(response.data);

      if(response.data){

        login(response.data);
        navigate('/',{ replace: true })
      }

    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
     
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
              type="username"
              name="username"
              placeholder="username"
              value={formData.username}
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




