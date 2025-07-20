const express = require("express");
const app = express();

app.get("/:id", (req, res) => {
	console.log(req.params);
	res.send("Hello, world!");
});

const PORT = 8080;
app.listen(PORT, () => {
	console.log(`My first Express app - listening on port ${PORT}!`);
});
