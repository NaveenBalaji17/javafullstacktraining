let x = 10;
const y = 20;
console.log("Let/const:", x,y);
const add = (a, b) => a + b;
console.log("Arrow Add:", add(5, 7));
const name = "naveen";
console.log('Hello ${name}, welcome to Es6!');

//3. TEMPLATE LITERALS
// Allows backtick strings with variables.
constname = "naveen";
console. log('Hello ${name}, welcome to ES6!');

//4. DESTRUCTURING
// Extract values from arrays or objects.
const nums = [100,200];
const [n1, n2]  = nums;
console.log("Array destructure:",n1, n2);

//object
const user = { id: 1, uname: "naveen" };
const { id, uname } = user;
console.log("Object destructure:", id, uname);

//5.promise
//represent the future value.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 1000);
});
promise.then((message) => console.log(message));

//6.ASYNC/AWAIT
//CLEANER SYNTAX FOR PROMISES
const fetchData = async () => {
    const data = await promise;
    console.log("Async/Await:", data);
};
fetchData();


//7.EVENT LOOP
//JS IS SINGLE THREADHEADED,
console.log("Even loop Start");
setTimeout(() => console.log("Timeout Executed"), 0);
console.log("Event Loop End");
//8.CLOSURES
//a closure keeps access to a variable even after
function outer() {
let count = 0;
return function inner() {
count++;
return count;

};

const counter = outer();
console.log("Closure:", counter());
}
//9.hoisting
//javascript moves declearations
console.log("Hoisting Example:");
console.log(a);
var a = 50;

