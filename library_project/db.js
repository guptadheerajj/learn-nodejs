// authors
const authors = [
	{ id: 2, name: "Bryan" },
	{ id: 2, name: "Christian" },
	{ id: 3, name: "Jason" },
];

async function getAuthorById(authorId) {
	return authors.find((author) => author.id === authorId);
}

async function getAllAuthors() {
	return authors;
}

// books
const books = [
	{ id: 1, reserve: true, name: "Book1_R" },
	{ id: 2, reserve: false, name: "Book2_NR" },
	{ id: 3, reserve: false, name: "Book3_NR" },
	{ id: 4, reserve: true, name: "Book4_R" },
];

async function getAllBooks() {
	return books;
}

async function getBookById(bookId) {
	return books.find((book) => book.id === bookId);
}

async function getReservedBookById(bookId) {
	return books.find((book) => book.id === bookId && book.reserve);
}

module.exports = {
	getAuthorById,
	getAllAuthors,
	getAllBooks,
	getBookById,
	getReservedBookById,
};
