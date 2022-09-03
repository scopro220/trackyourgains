import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <form className="register-form">
        <input type="text" name="" id="" placeholder="Enter Name" />
        <input type="email" name="" id="" placeholder="Enter Email" />
        <input type="password" name="" id="" placeholder="Enter Password" />
        <Link to="/dashboard">Register</Link>
        <p>
          Already a member? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
