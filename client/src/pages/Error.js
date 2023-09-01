import React from "react";
import "./Error.css";

function Error() {
  return (
    <div className="vertical-center">
      <div className="container">
        <div id="notfound" className="text-center ">
          <h1>😮</h1>
          <h2>Oops! Page Not Be Found</h2>
          <p>Sorry but the page you are looking for does not exist.</p>
          <a href="/">Back to homepage</a>
        </div>
      </div>
    </div>
  );
}

export default Error;
