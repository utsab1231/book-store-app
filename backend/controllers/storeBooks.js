const Book = require("../models/Book");

const storeBook = async (req, res) => {
  try {
    const { name, author, description, price, available, image } = req.body;
    if (!name || !author || !description || !price) {
      return res.status(403).json({
        error: "Missing Information",
        message: "Please provide all the required fields",
      });
    }

    const newBook = await Book.create({
      name,
      author,
      description,
      price,
      available,
      image,
    });

    if (!newBook) {
      return res.status(500).json({
        error: "Internal Error",
        message: "Something went wrong ",
      });
    } else {
      return res.status(200).json({
        message: "Book created successfully",
        books: newBook,
      });
    }
  } catch (err) {
    return res.status(500).json({
      error: err,
      message: err.message,
    });
  }
};
module.exports = storeBook;
