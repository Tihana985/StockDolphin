import { Logo } from "../../components/Logo/Logo";
import styles from "./SignUpPage.module.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode }  from "jwt-decode";

export const SignUpPage = () => {

    const initData = {
        name: "",
        email: "",
        password: "",
    };

    const [data, setData] = useState(initData);
    const [isSubmit, setIsSubmit] = useState(false);
    const [username, setUsername] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [decodedToken, setDecodedToken] = useState(null);
    const [error, setError] = useState(null);

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
        <div className={styles.signuppage}>
            <header className={styles.header}> <Logo /></header>
            <div className={styles.container}>
                <h3>Sign Up to <span className={styles.brand}>StockDolphin</span></h3>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <Navigate to="/dashboard" />
                ) : (
                    <form onSubmit={handleSignup} className={styles.form}>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={dataChange}
                            placeholder="Enter your name"
                            className={styles.email}
                        />
                        <p className="form-error">{formErrors.name}</p>
                        <input type="email"
                            name="email" 
                            value={data.email}
                            placeholder="Enter your email"
                            onChange={dataChange}
                            className={styles.password}
                        />
                        <p className="form-error">{formErrors.email}</p>
                        <input
                            type="password"
                               name="password"
                            value={data.password}
                            placeholder="Enter your Password"
                            onChange={dataChange}
                            className={styles.confirmpassword}
                        />
                        <p className="form-error">{formErrors.password}</p>
                        <button type="submit" className={styles.btnsubmit}>Sign Up</button>
                    </form>
                )}
            </div>
            <span className={styles.span}>Innovative Inventory System</span>
            <span className={styles.spantwo}>designed to revolutionise the way offices manage and stock their supplies</span>
        </div>
    )
}