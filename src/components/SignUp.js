import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handelSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passowrd do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      history.push("/login");
    } catch (err) {
      setError("Failed to create an Account");
      console.log(`err`, err);
    }
    setLoading(false);
  }

  return (
    <div key="signup-1 ">
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title text-center">Sign-Up</h5>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handelSubmit} className="m-3">
            <div className="form-group mb-1">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label>Password Confirm</label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Password Confirm"
              />
            </div>

            <button
              disabled={loading || !email || !passwordConfirm || !password}
              type="submit"
              className="btn btn-primary mt-4"
            >
              Submit
            </button>
          </form>
          <div className="w-100 text-center mt-2">
            Alredy have an account ? <Link to="/login"> Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
