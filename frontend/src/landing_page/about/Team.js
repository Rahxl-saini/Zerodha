import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">Peo</h1>
      </div>
      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="images/rahulsaini.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          ></img>
          <h4 className="mt-5">Rahul Saini</h4>
          <h6>Software Engineer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Rahul Saini is currently pursuing Software Engineering and building a
            full-stack project to solve real-world problems while strengthening
            his expertise in modern web technologies.
          </p>
          <p> Playing badminton is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
