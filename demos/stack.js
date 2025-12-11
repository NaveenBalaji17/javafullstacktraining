const fs = require("fs");
fs.writeFileSync("sample.txt","Hello from Node.js");
console.log("File written successfully.");
//1. LET AND CONST
// Block-scoped variables
async function fetchUsers () {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await response. json();

console.log("First User:", users[0].name);
console.log("First User:", users[1].name);
console.log("First User:", users[2].name);
console.log("First User:", users[3].name);
console.log("First User:", users[4].name);
}

fetchUsers();