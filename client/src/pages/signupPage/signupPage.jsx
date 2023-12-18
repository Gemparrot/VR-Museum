import React, { useState } from "react";
import UserService from "../../services/UserService.js";
import { setLocalStorageUser } from "../../utils/localStorageUtils.js";
import { Link } from 'react-router-dom';
import "./signuppage.css";

const SignupPage = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (username !== '' && password !== '') {
      const user = {
        email: username,
        password
      }
      const result = await UserService.register(user).catch(error => {
        alert("Error during registration");
        reset();
      });
      if (result?.data?.message === "Successful") {
        let registeredUser = result?.data?.user;
        registeredUser.token = result?.data?.token;
        setLocalStorageUser(registeredUser);

        onSignup();
      }
    }
  }

  const reset = () => {
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <div className="container">
        <h2>Sign Up</h2>
        <div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignup}>
          Sign Up
        </button>
        <Link to="/">Have an account? Login</Link>
      </div>
    </>
  )
}

export default SignupPage;