const { createServer } = require("node:http");
const dotenv = require("dotenv");
const result = dotenv.config({ debug: process.env.DEBUG });
console.log(result);
console.log(result.parsed);
console.log(process.env.NODE_ENV);

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello World");
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
