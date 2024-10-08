import styles from "./Signup.module.css";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import check_icon from "../../images/checkIcon.png";
import { jwtDecode } from "jwt-decode";

export const Signup = () => {
  const initData = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(initData);
  const [isSubmit, setIsSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const dataChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      setFormErrors(validate(data));

      if (Object.keys(formErrors).length === 0) {
        let response = await fetch("http://localhost:10000/api/auth/signup", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        });
        let jsonData = await response.json();
        console.log("Response from the server: ", jsonData);

        if (response.ok) {
          setIsSubmit(true);
          localStorage.setItem("isSubmit", "true");
          localStorage.setItem("token", jsonData.token);
          localStorage.setItem("username", jsonData.username);
        }
      } else {
        alert("Please fill in all required fields correctly.");
        event.preventDefault();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(data);
    const isSubmit = localStorage.getItem("isSubmit") === "true";
    const username = localStorage.getItem("username");

    if(username) { setUsername(username); }

    const token = localStorage.getItem("token");
    if(token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
      } catch(err) {
        console.log("Failed to decode token", err);
      }
    }
    setIsSubmit(isSubmit);
  }, [data]);

  const validate = (values) => {
    const emailRegex = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/i;
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required!";
    } else if (values.name.length < 3) {
      errors.name = "Name must be greather than 3 characters.";
    }
    if (!values.email) {
      errors.email = "E-mail required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This email is invalid!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters or longer!";
    }

    console.log(errors);
    return errors;
  };

  return (
    <div className={styles.signup}>
      <header className={styles.signupheader}>
        <img id="logo" src={logo} alt="logo" />
        <span className="login-section">
          Already have an account?
          <button>
            <Link to="/login" id="login-btn" replace>
              Login
            </Link>
          </button>
        </span>
      </header>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <Navigate to="/dashboard" />
      ) : (
        <form className="Signup-form" onSubmit={handleSignup}>
          <h1>You’re one click away from less inefficiency.</h1>
          <div className={styles.signupName}>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              value={data.name}
              onChange={dataChange}
              placeholder="Enter your name"
            />
            <p className="form-error">{formErrors.name}</p>
          </div>
          <div className="signup-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={dataChange}
              placeholder="Enter your email"
            />
            <p className="form-error">{formErrors.email}</p>
          </div>
          <div className="signup-password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={dataChange}
              placeholder="Enter your password"
            />
            <p className="form-error">{formErrors.password}</p>
          </div>
          <button type="submit">Sign up</button>
        </form>
      )}
      <section className={styles.signup-info}>
        <div>
          <img src={check_icon} />
          <p>Inventory System that revolutionize supply management.</p>
        </div>
        <div>
          <img src={check_icon} />
          <p>Efficiently optimize expandable item inventory.</p>
        </div>
        <div>
          <img src={check_icon} />
          <p>Automate purchase record keeping for cost savings.</p>
        </div>
      </section>
    </div>
  );
};