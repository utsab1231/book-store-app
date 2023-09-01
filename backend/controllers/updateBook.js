const Book = require("../models/Book");
const updateBook = async (req, res) => {
  try {
    const { name, author, description, price, available, image } = req.body;
    const id = req.params.id;
    if (!id) {
      res.status(403).json({
        error: "Missing required parameter",
        message: "Id required is missing or invalid ",
      });
    }
    const bookExists = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    if (!bookExists) {
      return res.status(500).json({
        error: "Something went wrong",
        message: "Invalid Id or Book does not exist ",
      });
    } else {
      return res.status(200).json({
        message: "Book Updated successfully",
        books: bookExists,
      });
    }
  } catch (err) {
    return res.status(500).json({
      error: "Something went wrong",
      message: err.message,
    });
  }
};

module.exports = updateBook;
