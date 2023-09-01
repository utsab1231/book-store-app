import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import apiURL from "../apiUrl";

const Description = () => {
  const [desc, setDesc] = useState(true);
  const [bookdata, setBookData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${apiURL}/${id}`)
        .then((response) => {
          setBookData(response.data.book);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetch();
  }, [id]);

  return (
    <>
      {desc ? (
        <div
          className="d-flex justify-content-center align-items-center  "
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "royalblue",
          }}
        >
          <div
            className="shadow-lg p-3 mb-5  rounded container-fluid d-flex flex-lg-row flex-md-column "
            style={{
              width: "70%",
              height: "85%",
              backgroundColor: "#d6e2e9",
              color: "black",
            }}
          >
            <div
              style={{
                width: "40%",
                height: "100%",
                padding: "1rem",
                borderRight: "1px solid gray",
              }}
            >
              <img
                src={bookdata.image}
                alt="book"
                className="image-fluid"
                style={{ height: "100%" }}
              />
            </div>
            <div
              style={{ height: "100%", width: "60%" }}
              className="font-weight-bold text-left px-5 "
            >
              <h1 className="fs-2 fw-semibold">{bookdata.name}</h1>
              <p>
                Written By :
                <span className="fw-semibold px-2" style={{ color: "#219ebc" }}>
                  {bookdata.author}
                </span>
              </p>

              <p className="fs-6">{bookdata.description}</p>
              <h3 className="mt-5 bg-success w-25 border rounded-3 p-2 text-white fw-bold">
                Rs. {bookdata.price}
              </h3>
              <Link
                to="/books"
                className="btn btn-secondary text-center  my-5"
                onClick={() => {
                  setDesc(false);
                }}
              >
                Back to books
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Description;
