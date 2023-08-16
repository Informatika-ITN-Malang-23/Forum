import React, { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/authProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();
  const  navigate  = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setToken("this is a test token");
    navigate("/", { replace: true });
    console.log(email);
    console.log(password);
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label className="form_label">Email Address</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 ">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              {" "}
              Login
            </button>
          </div>
          <div className="link_login">
            <a href="/register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}
