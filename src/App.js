import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center ">
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
