// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center mt-5">Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="email" className="text-light mb-1">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="text-light mb-1">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register" className="text-light">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
