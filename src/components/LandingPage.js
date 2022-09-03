import React from "react";
import { Link } from "react-router-dom";
import Quote from "./Quote";

const LandingPage = () => {
  const quotes = [
    "“The last three or four reps is what makes the muscle grow.”",
    "“All progress takes place outside the comfort zone.”",
    "“Whether you think you can, or you think you can’t, you’re right.”",
    "“You must expect great things of yourself before you can do them.”",
  ];

  return (
    <div className="landing-page">
      <p>Not seeing the results you want?</p>
      <p>Feeling like you aren't progressing how you wanted?</p>
      <p>
        Then <span className="company-name">Track Your Gains</span> and see the
        best version of you!
      </p>
      <p>
        {" "}
        <Link className="landing-page-login" to="/login">
          Login
        </Link>{" "}
        or{" "}
        <Link className="landing-page-register" to="/register">
          Register
        </Link>{" "}
        today and make some gains.
      </p>
      <div className="quote-wrapper">
        {quotes.map((item) => (
          <Quote quote={item} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
