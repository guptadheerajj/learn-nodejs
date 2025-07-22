const { Router } = require("express");
const {
	getAllBooks,
	getBookById,
	getReservedBookById,
} = require("../controllers/bookController");

const bookRouter = Router();

bookRouter.get("/", getAllBooks);

bookRouter.get("/:bookId", getBookById);

bookRouter.get("/:bookId/reserve", getReservedBookById);

bookRouter.post("/:bookId/reserve", (req, res) => {
	const { bookId } = req.params;
	res.send(`Post, Reserve Books with book id: ${bookId}`);
});

module.exports = bookRouter;
