import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <form className="login-form">
        <input type="email" name="" id="" placeholder="Enter Email" />
        <input type="password" name="" id="" placeholder="Enter Password" />
        <input type="submit" value="Login" />
        <p>
          Already a member? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
