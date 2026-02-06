import React from "react";

function Signup() {
  return (
    <div className="container p-5 mt-5 mb-5">

      {/* Top Heading */}
      <div className="text-center mb-5">
        <h1 style={{ fontWeight: "500" }}>
          Open a free demat and trading account online
        </h1>
        <p className="text-muted fs-5">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </p>
      </div>

      {/* Main Section */}
      <div className="row align-items-center p-5 mt-5 mb-5">

        {/* Left Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="images/signup.png"
            alt="trading dashboard"
            className="img-fluid"
            style={{ maxWidth: "95%" }}
          />
        </div>

        {/* Right Form Section */}
        <div className="col-md-5 offset-md-1">

          <h2 style={{ fontWeight: "500" }}>Signup now</h2>
          <p className="text-muted">Or track your existing application</p>

          {/* Mobile Input */}
          <div className="input-group mt-4 mb-3">
            <span className="input-group-text bg-white">
              🇮🇳 +91
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Button */}
          <button
            className="btn w-100"
            style={{
              backgroundColor: "#387ed1",
              color: "white",
              padding: "10px",
              fontSize: "18px"
            }}
          >
            Get OTP
          </button>

          {/* Terms */}
          <p className="mt-3" style={{ fontSize: "14px" }}>
            By proceeding, you agree to the Zerodha{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              terms
            </a>{" "}
            &{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              privacy policy
            </a>
          </p>

          <p style={{ fontSize: "14px" }}>
            Looking to open NRI account?{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Click here
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;
