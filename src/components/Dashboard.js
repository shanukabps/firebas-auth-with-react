import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handelLogOut() {
    setError("");
    try {
      await logout();
      history.push("./login");
    } catch (error) {
      setError("Failed to logOut");
    }
  }

  return (
    <div>
      <h2>DashBoard</h2>
      <div>
        <div className="mt-5">
          <h4 className="mt-5 mb-5">Profile</h4>
          <h6>Email: {currentUser.email}</h6>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <Link to="update-profile "></Link>
        </div>
        <button
          type="button"
          className="btn btn-danger m-5"
          onClick={handelLogOut}
        >
          Log-Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
