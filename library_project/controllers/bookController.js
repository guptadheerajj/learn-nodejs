const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db");

async function getAllBooks(req, res) {
	const allBooks = await db.getAllBooks();

	if (!allBooks) {
		throw new CustomNotFoundError("Books not found");
	}

	res.send(allBooks);
}

async function getBookById(req, res) {
	const { bookId } = req.params;

	const book = await db.getBookById(Number(bookId));

	if (!book) {
		throw new CustomNotFoundError(`Book with id: ${bookId} was not found`);
	}

	res.send(book);
}

async function getReservedBookById(req, res) {
	const { bookId } = req.params;

	const book = await db.getReservedBookById(Number(bookId));

	if (!book) {
		throw new CustomNotFoundError(
			`Reserved Book with id: ${bookId} was not found`
		);
	}

	res.send(book);
}

module.exports = {
	getAllBooks,
	getBookById,
	getReservedBookById,
};
