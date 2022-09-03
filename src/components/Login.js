import React from "react";
// import DashBoard from "./Dashboard";
import { Link } from "react-router-dom";

const Login = () => {
  // const showDash = () => {
  //   <Route path="/dashboard" exact component={DashBoard} />;
  // };

  return (
    <div className="login">
      <form className="login-form">
        <input type="email" name="" id="" placeholder="Enter Email" />
        <input type="password" name="" id="" placeholder="Enter Password" />
        <Link to="/dashboard">Login</Link>
        <p>
          Already a member? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
