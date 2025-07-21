const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All Books"));

bookRouter.get("/:bookId", (req, res) => {
	const { bookId } = req.params;
	res.send(`Book Id: ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
	const { bookId } = req.params;
	res.send(`Get, Reserve Books with book id: ${bookId}`);
});

bookRouter.post("/:bookId/reserve", (req, res) => {
	const { bookId } = req.params;
	res.send(`Post, Reserve Books with book id: ${bookId}`);
});

module.exports = bookRouter;
