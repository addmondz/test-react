// src/components/Register.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Register() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the register function with formData
    register(formData);
  };

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center mt-5">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="email" className="text-light mb-1">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="text-light mb-1">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login" className="text-light">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
