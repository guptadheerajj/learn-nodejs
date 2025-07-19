const { randomUUID } = require("crypto");
const EventEmitter = require("events");

class Logger extends EventEmitter {
	log(msg) {
		this.emit("message", {
			id: randomUUID(),
			msg,
		});
	}

	appendToFile(path, content) {
		this.emit("appendFile", path, content);
	}
}

module.exports = Logger;
