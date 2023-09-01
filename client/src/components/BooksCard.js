import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BooksCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap gap-5 p-6">
      {data &&
        data.map((book, index) => {
          return (
            <div
              key={book._id}
              className="card "
              style={{
                width: "250px",

                backgroundColor: "#fefae0",
              }}
            >
              <div>
                <img
                  src={book.image}
                  alt="book"
                  style={{ width: "100%" }}
                  className="image-fluid"
                  role="button"
                  onClick={() => {
                    navigate(`/description/${book._id}`);
                  }}
                />
              </div>
              <h5 className="p-3">{book.name.slice(0, 23)} ...</h5>
              <p
                className="px-4 "
                style={{
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                Rs.{book.price}
              </p>
              <div className="d-flex">
                <Link
                  to={`/updatebook/${book._id}`}
                  className="btn btn-primary p-2 m-1"
                  style={{ width: "50%" }}
                >
                  Update
                </Link>
                <Link
                  to={`/deletebook/${book._id}`}
                  className="btn btn-danger p-2 m-1"
                  style={{ width: "50%" }}
                >
                  Delete
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BooksCard;
