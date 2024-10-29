import styles from "./LoginPage.module.css";
import { Logo } from "../../components/Logo/Logo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";


export const LoginPage = () => {
    const initData = {
        email: "",
        password: "",
    };

    const [data, setData] = useState(initData);
    const [isSubmit, setIsSubmit] = useState(false);
    const [username, setUsername] = useState("");
    const [formErrors, setFormErros] = useState({});
    const [decodedToken, setDecodedToken] = useState(null);
    const [error, setError] = useState(null);
    

    const dataChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleLogin = async (event) => {
        try {
            event.preventDefault();
            setFormErros(validate(data));

            if (Object.keys(formErrors).length === 0) {
                let response = await fetch("http://localhost:10000/api/auth/login", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json",
                    },
                });

                let jsonData = await response.json();
                console.log(jsonData)
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
        
        const isSubmit = localStorage.getItem("isSubmit") === "true";
        const username = localStorage.getItem("username");

        if (username) { setUsername(username); }

        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setDecodedToken(decoded);
            } catch (err) {
                console.log("Failed to decode token", err);
            }
        }
        setIsSubmit(isSubmit);
    }, [data]);

    const validate = (values) => {
        const emailRegex = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/i;
        const errors = {};

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
        <div className={styles.loginpage}>
            <header className={styles.header}>
                <Logo />
            </header>
            <div className={styles.container}>
                <h3>Welcome back!</h3>
                
                <form  className={styles.form}>
                {Object.keys(formErrors).length === 0 && isSubmit && (
                    <Navigate to="/dashboard" />
                )}
                    <div className={styles.emailinput}>
                        <input
                            type="email"
                             name="email"
                            value={data.email}
                            placeholder="Enter your email"
                            onChange={dataChange}
                        />
                           <p className={styles.formerrors}>{formErrors.email}</p>
                    </div>
                    <div className={styles.passwordinput}>
                        <input
                            type="password"
                               name="password"
                            value={data.password}
                            placeholder="Enter your password"
                            onChange={dataChange}
                        />
                          <p className={styles.formError}>{formErrors.password}</p>
                    </div>
                    <button type="submit" className={styles.btnlogin} onClick={handleLogin}>Log In</button>
                    {error && <p className={styles.error}>{error}</p>}
                    <span className={styles.spanaccount}>Don't have an account? <Link to="/signup" label="Sign Up" className={styles.link}>Sign Up</Link> </span>

                </form>
            </div>
            <span className={styles.span}>Innovative Inventory System</span>
            <span className={styles.spantwo}>designed to revolutionise the way offices manage and stock their supplies</span>
        </div>
    )
}