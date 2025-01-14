import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();


    let users = JSON.parse(localStorage.getItem("users")) || [];


    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      alert("User already exists. Please login.");
      return;
    }


    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful. You can now login.");
    navigate("/");
  };

  return (
    <section className="wrapper">
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <h3>Register</h3>
          <div>
            <label htmlFor="floatingInput">Username</label>
            <input
              type="text"
              id="floatingInput"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="floatingInputEmail">Email</label>
            <input
              type="email"
              id="floatingInputEmail"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </div>
          <button type="submit">REGISTER</button>
          <div className="register-link">
            Already a member? <button className="button" onClick={() => navigate('/login')}></button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
