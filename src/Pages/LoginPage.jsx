import React, { useState } from "react";
import "../Styles/Login.css";
import NavBar from "../Components/Navbar";
import Navbar from "../Components/Navbar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let formErrors = {};
    let isValid = true;

    if (!email) {
      formErrors.email = "Please enter your email";
      isValid = false;
    } else if (!!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Enter a valid email address";
      isValid = false;
    }

    if (!password) {
      formErrors.email = "Please enter your password";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Please enter a valid password";
      isValid = false;
    }
    setErrors(formErrors);
    return isValid;
  };
  return (
    <div className="login-container">
      <Navbar />
      <section className="login-wrapper">
        <form>
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <br />
          <br />
          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <br />
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
