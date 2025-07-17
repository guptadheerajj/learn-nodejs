const path = require("path");
const fs = require("fs");
const fsPromise = require("fs/promises");
const { threadId } = require("worker_threads");

// create folder
// fs.mkdir(path.join(__dirname, "newFolder"), {}, (err) => {
// 	if (err) throw new Error(err);
// 	console.log("Directory created succsccfully");
// });

// async function createFolder() {
// 	try {
// 		await fsPromise.mkdir(path.join(__dirname, "newFolder2"), {});
// 		console.log("Directory created successfully");
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// createFolder();

// Create and write to file

// fs.writeFile(
// 	path.join(__dirname, "/newFolder", "new.txt"),
// 	"Hello World!",
// 	(err) => {
// 		if (err) console.log(err);
// 		console.log("File written successfully!");

// 		// Append File
// 		fs.appendFile(
// 			path.join(__dirname, "/newFolder", "new.txt"),
// 			" I love node.js!",
// 			(err) => {
// 				if (err) console.log(err);
// 				console.log("File written successfully!");
// 			}
// 		);
// 	}
// );

// Read file
fs.readFile(
	path.join(__dirname, "/newFolder", "new.txt"),
	"utf8",
	(err, data) => {
		if (err) throw new Error(err);
		console.log(data);
	}
);

// Rename file
fs.rename(
	path.join(__dirname, "/newFolder", "new.txt"),
	path.join(__dirname, "/newFolder", "helloWorld.txt"),
	(err) => {
		if (err) throw err;
		console.log("File renamed succseefully....");
	}
);
