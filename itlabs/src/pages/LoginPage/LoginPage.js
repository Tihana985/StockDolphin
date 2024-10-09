import styles from "./LoginPage.module.css";
import { Logo } from "../../components/Logo/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";


export const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('Please fill all fields');
        } else {
            setError('');
            console.log({ email, password });
        }
    };

    return (
        <div className={styles.loginpage}>
            <header className={styles.header}>
                <Logo />
            </header>
            <div className={styles.container}>
                <h3>Welcome back!</h3>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.emailinput}>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.passwordinput}>
                        <input
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={styles.btnlogin}>Log In</button>
                    {error && <p className={styles.error}>{error}</p>}
                    <span className={styles.spanaccount}>Don't have an account? <Link to="/signup" label="Sign Up" className={styles.link}>Sign Up</Link> </span>

                </form>
            </div>
            <span className={styles.span}>Innovative Inventory System</span>
            <span className={styles.spantwo}>designed to revolutionise the way offices manage and stock their supplies</span>
        </div>
    )
}