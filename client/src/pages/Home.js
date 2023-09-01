import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HOME-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{
            height: "91.5vh",
          }}
        >
          <h2 style={{ fontSize: "80px" }}>BOOK STORE </h2>
          <h3>FOR YOU</h3>
          <p className="mb-0" style={{ color: "wheat" }}>
            Checkout the books from here
          </p>
          <Link to="/books" className="viewBook my-3">
            View Books
          </Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{
            height: "91.5vh",
          }}
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdni.iconscout.com%2Fillustration%2Fpremium%2Fthumb%2Fgirl-reading-book-3609619-3016801.png&f=1&nofb=1&ipt=a8461eae6179614a976f616bfc89f5eac93d32fbdfeb0bfe752ffa1418215fe9&ipo=images"
            alt="girl-reading-book"
            className="img-fluid homeimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
