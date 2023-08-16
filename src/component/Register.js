import React, {useState} from "react";
import "./LoginSignup.css";


export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
  };
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label className="form_label">Username</label>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3 ">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 ">
            <label>Password </label>
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
              Sign Up
            </button>
          </div>
          <div className="link_register">
            <a href="/">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}
