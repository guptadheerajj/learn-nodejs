const path = require("path");

// Base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
const pathObj = path.parse(__filename);
console.log(pathObj);

// Concatenate paths
console.log(path.join(__dirname, "newFolder", "newFile.js"));
