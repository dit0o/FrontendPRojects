import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            alert("Login successful!");
            navigate("/home");
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    const handleGuestLogin = () => {
        alert("You are logged in as a guest!");
        navigate("/");
    };

    return (
        <section className="wrapper">
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <h3>Login</h3>

                    <div>
                        <label htmlFor="floatingInput">Email</label>
                        <input
                            type="email"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="floatingPassword">Password</label>
                        <input
                            type="password"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">LOGIN</button>
                    <button type="button" className="guest-btn" onClick={handleGuestLogin}>
                        GUEST USER
                    </button>

                    <div className="register-link">
                        Not a member yet? 
                        <button type="button" onClick={() => navigate("/signup")}>Register</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
