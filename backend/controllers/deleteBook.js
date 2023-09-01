const Book = require("../models/Book");
const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        error: "Missing Parameters",
        message: "Id is either invalid or missing",
      });
    }
    const bookExists = await Book.findByIdAndDelete(id);
    if (!bookExists) {
      return res.status(500).json({
        error: "Something went wrong",
        message: "Invalid Id or Book does not exist ",
      });
    } else {
      return res.status(200).json({
        sucess: "true",
        message: "Book deleted sucessfully",
      });
    }
  } catch (err) {
    return res.status(500).json({
      error: "Something went wrong",
      message: err.message,
    });
  }
};
const deleteBooks = async (req, res) => {
  try {
    const deleted = await Book.deleteMany({});
    if (!deleted) {
      return res.status(500).json({
        error: "Something went wrong",
        message: "Something went wrong",
      });
    }
    res.status(200).json({
      sucess: "true",
      message: "Datbase is cleared",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Something went wrong",
      message: err.message,
    });
  }
};

module.exports = { deleteBook, deleteBooks };
