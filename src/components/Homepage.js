import React from "react";
import GoogleLogin from "react-google-login";

const Homepage = () => {
  return (
    <div className="home__page">
      <div className="login__message">
        <h2>📗</h2>
        <h1>A Readers favourite place!</h1>
        <p>
          We provide high quality online resource for reading blogs. Just sign
          up and start reading some quality blogs.
        </p>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Homepage;
