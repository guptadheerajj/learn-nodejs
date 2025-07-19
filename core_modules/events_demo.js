const EventEmitter = require("events");
const Logger = require("../Logger.js");
const fs = require("fs");
const path = require("path");

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// function handleStart() {
// 	console.log("Program started...");
// }
// function handleStop() {
// 	console.log("Program stopped...");
// }

// myEmitter.on("start", handleStart);
// myEmitter.on("stop", handleStop);

// myEmitter.emit("start");
// setTimeout(() => {
// 	myEmitter.emit("stop");
// }, 1000);

const myLogger = new Logger();

myLogger.on("message", (msg) => {
	console.log("Logging:\n", msg);
});

myLogger.on("appendFile", (path, content) => {
	fs.appendFile(path, content, (err) => {
		if (err) throw err;
		console.log("Content appended Successfully");
	});
});

myLogger.log("Hello World");
myLogger.appendToFile(path.join(__dirname, "appendedFile.txt"), "First Line\n");
myLogger.appendToFile(
	path.join(__dirname, "appendedFile.txt"),
	"Second Line\n"
);
