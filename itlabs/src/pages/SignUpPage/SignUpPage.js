import { Logo } from "../../components/Logo/Logo";
import styles from "./SignUpPage.module.css";
import { useState } from "react";

export const SignUpPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (email === '' || password === '' || confirmPassword === '') {
            setError('Please fill all fields');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            console.log({ email, password });
            // Handle signup logic here
        }
    };

    return (
        <div className={styles.signuppage}>
            <header className={styles.header}> <Logo /></header>
            <div className={styles.container}>
                <h3>Sign Up to <span className={styles.brand}>StockDolphin</span></h3>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.email}
                    />
                    <input type="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.password}
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={styles.confirmpassword}
                    />
                    <button type="submit" className={styles.btnsubmit}>Sign Up</button>
                </form>
            </div>
            <span className={styles.span}>Innovative Inventory System</span>
            <span className={styles.spantwo}>designed to revolutionise the way offices manage and stock their supplies</span>
        </div>
    )
}