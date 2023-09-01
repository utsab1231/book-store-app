import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import apiURL from "../apiUrl";

import { useParams, useNavigate } from "react-router-dom";

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState(true);

  const handleClick = async (event) => {
    const verify = event.target.name;
    if (verify === "close") {
      setModel(false);
      setTimeout(() => {
        navigate("/books");
      }, 200);
    }
    if (verify === "delete") {
      await axios
        .delete(`${apiURL}/${id}`) // api call her -->
        .then((response) => {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/books");
          }, 200);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <>
      {model ? (
        <div
          className="d-flex justify-content-center align-items-center  "
          style={{ width: "100%", height: "100vh", backgroundColor: "white" }}
        >
          <div
            className="shadow-lg p-3 mb-5 bg-white rounded container-fluid"
            style={{
              width: "50%",
              height: "35%",
              backgroundColor: "wheat",
              color: "black",
            }}
          >
            <h1 className="text-center">Are you sure want to delete?</h1>
            <div className="d-flex justify-content-center align-items-center mt-5 gap-4">
              <button
                onClick={handleClick}
                name="close"
                className="btn btn-secondary text-center px-5 py-3  "
                style={{ width: "50%" }}
              >
                Close
              </button>
              <button
                onClick={handleClick}
                name="delete"
                className="btn btn-danger text-center px-5 py-3 "
                style={{ width: "50%" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default DeleteBook;
