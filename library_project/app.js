const express = require("express");
const app = express();
const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");

// routers
app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/", indexRouter);

// error handler
app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
