import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksCard from "../components/BooksCard";
import Spinner from "../components/Spinner";
import apiURL from "../apiUrl";

const Book = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const dataFetch = async () => {
      await axios.get(apiURL).then((res) => {
        //api call here -->

        setData(res.data.books);
      });
    };
    dataFetch();
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-dark p-5" style={{ minHeight: "91.5vh" }}>
          <div className="d-flex justify-content-center align-items-center p y-3">
            <h4 className="text-white mb-5 ">Books Section</h4>
          </div>
          <BooksCard
            data={data}
            onClick={() => {
              console.log("clicked");
            }}
          />
        </div>
      )}
    </>
  );
};

export default Book;
