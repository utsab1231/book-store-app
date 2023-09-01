const Book = require("../models/Book");
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if (!books) {
      return res.status(200).json({
        error: "Something went wrong",
        message: "Cannot retrieve books from the database.",
      });
    } else {
      res.status(200).json({
        message: "sucessfully retrived books",
        books: books,
      });
    }
  } catch (err) {
    return res.status(500).json({
      error: "Something went wrong",
      message: err.message,
    });
  }
};

const getBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        error: "Invalid Input",
        message: "Either the id is valid or Book doesn't exist",
      });
    } else {
      res.status(200).json({
        message: "Sucessfully retrieved",
        book: book,
      });
    }
  } catch (err) {
    return res.status(500).json({
      error: "Something went wrong",
      message: err.message,
    });
  }
};

module.exports = { getBook, getBooks };
