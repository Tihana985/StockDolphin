import styles from "./LoginPage.module.css";
import { Logo } from "../../components/Logo/Logo";
import { useState } from "react";


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
                <div className={styles.rightPart}>
                    <button>Login</button>
                </div>
            </header>
            <div className={styles.container}>
                <h3>Welcome back!</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.emailinput}>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.passwordinput}>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Log In</button>
                    <span>D</span>
                </form>
            </div>
        </div>
    )
}