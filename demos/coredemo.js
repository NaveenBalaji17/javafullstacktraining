const fs = require("fs");
const path = require("path");
const os = require("os");

// Create a text file
fs.writeFileSync("sample.txt", "Hello from Node.js core module!");

// Read file
const data = fs.readFileSync("sample.txt", "utf-8");
console.log("File Content:", data);

// Path example
console.log("File extension:", path.extname(_filename));

// OS example
console.log("CPU Count:", os.cpus().length);