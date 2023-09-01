import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import apiURL from "../apiUrl";

const UpdateBook = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios.get(`${apiURL}/${id}`).then((response) => {
          //api call here
          setData(response.data.book);
        });
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetch();
  }, [id]);

  const updateData = async () => {
    try {
      await axios
        .put(`${apiURL}/${id}`, data) //api call here-->
        .then((response) => {
          setData({
            name: "",
            author: "",
            description: "",
            price: "",
            image: "",
          });
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/books");
          }, 1000);
        });
    } catch (err) {
      toast.error("Something went wrong ");
    }
  };

  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center "
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        <div className="mb-3 text-white">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Book Name"
            name="name"
            onChange={changeHandler}
            value={data.name}
          />
        </div>
        <div className="mb-3 text-white">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Author name"
            name="author"
            value={data.author}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3 text-white">
          <label htmlFor="formGroupExampleInput3" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput3"
            placeholder="Description"
            name="description"
            value={data.description}
            onChange={changeHandler}
          />
        </div>

        <div className="mb-3 text-white">
          <label htmlFor="formGroupExampleInput4" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="formGroupExampleInput4"
            placeholder="Enter the price"
            name="price"
            value={data.price}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3 text-white">
          <label htmlFor="formGroupExampleInput5" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput5"
            placeholder="Enter Image URL"
            name="image"
            value={data.image}
            onChange={changeHandler}
          />
        </div>

        <button className="btn btn-success " onClick={updateData}>
          Update
        </button>
      </div>
    </div>
  );
};

//

//

export default UpdateBook;
