const express = require("express");
const router = express.Router();
const storeBook = require("../controllers/storeBooks");
const { getBooks, getBook } = require("../controllers/getBooks");
const updateBook = require("../controllers/updateBook");
const { deleteBook, deleteBooks } = require("../controllers/deleteBook");

//unprotected routes
router.post("/books", storeBook);
router.get("/books", getBooks);
router.get("/books/:id", getBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);
router.delete("/books/", deleteBooks);

module.exports = router;
