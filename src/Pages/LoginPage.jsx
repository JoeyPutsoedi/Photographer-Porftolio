// const handleValidation = () => {
//   let formErrors = {};
//   let isValid = true;

//   if (!email) {
//     formErrors.email = "Please enter your email";
//     isValid = false;
//   } else if (!!/\S+@\S+\.\S+/.test(email)) {
//     formErrors.email = "Enter a valid email address";
//     isValid = false;
//   }

//   if (!password) {
//     formErrors.email = "Please enter your password";
//     isValid = false;
//   } else if (password.length < 6) {
//     formErrors.password = "Please enter a valid password";
//     isValid = false;
//   }
//   setErrors(formErrors);
//   return isValid;
// };
import React, { useState } from "react";
import "../Styles/Login.css";
import "../Styles/Mediaqueries.css";
import { loginAdmin } from "../api/api";
import Navbar from "../Components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigation = useNavigate();

  /*Handle logging in------------------------------------------------------------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent auto submit

    setLoading(true);
    setErrors(null);

    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    try {
      const res = await loginAdmin(formData);
      console.log(res.data);

      if (res && res.data) {
        setLoading(false);
        alert("Logged In succesfully");

        localStorage.setItem("admin", JSON.stringify(res.data)); //store user token until they signout

        //UPDATE AUTHCONTEXT
        dispatch({ type: "LOGIN", payload: res.data });

        //Naviagte to admin side
        navigation("/AdminCategories");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      setLoading(false);
      alert("Failed to log in");
      console.log({ error: error.message });
    }
  };
  return (
    <div className="login-container">
      <Navbar />
      <section className="login-wrapper">
        <form onSubmit={handleSubmit}>
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
          {/* {errors.email && <p className="error">{errors.email}</p>} */}
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
          {/* {errors.password && <p className="error">{errors.password}</p>} */}
          <br />
          <button type="submit">{loading ? "Logging in..." : "Login"}</button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
