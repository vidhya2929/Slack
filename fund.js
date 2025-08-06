// LARGEST OF 3 NUMBERS
function largest(a, b, c){
  return Math.max(a, b, c);
}
console.log(largest(3, 7, 5));

// ELSE IF
function max(a,b,c){
  if (a >=b && a>=c) return a;
  else if(b>=a && b>=c)return b;
  else return c; 
}
console.log(max(a,b,c));

// PRIME
 function isPrime(num){
  if(num <= 1)
    return false;
  for(let i=2; i <= Math.sqrt(num); i++){
    if(num % i === 0)
      return false;
  }
  return true;
 }
 console.log(isPrime(9));
//  checking upto (root num) is enough to find any divisors

// FIBONACCI SERIES
// Each number is the sum of the previous two.
function fibonacci(n){
  let a =0, b=1, result =[a,b];
  // 1st term, 2nd term, stores the sequence
  for( let i =2; i < n; i++){
    let next = a+b;
    result.push(next);
    a = b;
    b = next;
  }
  return result;
}
console.log(fibonacci(7));
// // [0,1,1,2,3,5,8]

// REVERSE A STRING WITHOUT USING BUILT -IN FUNCTION

function reverseStr(str){
  let rev = '';
  // Initialising an empty string "rev" to build the reversed string
  for(let i =str.length -1; i<= 0; i--){
    // Loop from last character down to the first 
    rev += str[i];
    // on each loop, append the character at index i to rev
  }
  return rev
  // return reversed string
}

//BUILT -IN ARRAY FUNCTION
function reverseStr(str){
  return str.split('').reverse().join('');
  // str.split('') -> turns "hello" itno ["h", "e", "l","l","o"]
  // .reverse() -> becomes ["o", "l", "l","e","h"]
  // .join('') -> back to "olleh"
}
console.log(reverseStr("hello"));

// RECURSION
function reverseStr(str){
  if (str === "") return "";
  return reverseStr(str.substr(1)) + str[0];
}
console.log(reverseStr("hello"));

// str.substr(1) takes the string except the first letter
// recursively calls itself with the rest of the string
// Adds the first letter at the end
// eg: reverseStr("hello") -> reverseStr("ello") + "h"


// FUNCTION THAT RETURNS ANOTHER FUNCTION (CLOSURE)
// a function remembers variable from its outer function, even after that outer function has finished executing
function greet(name){
  return function(message){
    return `${message}, ${name}`;
  };
}
const heyy = greet("kent");
console.log(heyy("hello"));
// here this call returns a new function that takes "message" and combines it with "kent"

// COUNTER FUNCTION WITH PRIVATE STATE

// a function that keeps track of a value(like count), but that value is not directly accessible from outside the function- it's encapsulated(i.e, private)using a closure.
function createCounter(){
  let count = 0;
  return function(){
    count++;
    return count;
  };
}
const counter = createCounter();
// counter is a function that remembers the "count" variable from its scope
console.log(counter());
console.log(counter());
// "count" remains in memory between calls, even though createCounter() has already finished executing

// CONVERT TO ARROW FUNCTION
// regular
 function multiply(x,y){
  return x * y;
 }
// arrow
const multiply= (x,y) => x * y;
console.log(multiply(3,4));
// single parameter
const square = x => x * x;
console.log(square(5));

// No paramters
const greet = () =>
  console.log("hello!");
greet();

// with block body
const add = (a,b) =>{
  const result = a+b;
  return result;
}
console.log(add(2,3));

// VAR, LET, CONST
function demo(){
  if(true){
    var x = 1;
    let y = 2;
    const z = 3;
  }
}
// var is function scoped
// available anywhere inside the function where it is declared.
// so x is accessible outside the if block



// let and const are block-scoped
// only available inside the {} block where they are declared
// So y and z are not accessible outside the if block 

// ARRAY
// Map
let arr = [1,2,3,4,5];
let doubled = arr.map(num => num * 2);
// it returns a new array

// Filter
let evens = arr.filter(num => num % 2 === 0);
// returns array with matching items

// reduce
let sum = arr.reduce((acc, val) => acc + val, 0);
// reduces to a single value

// forEach - runs function for each element (no return)
arr.forEach(num => console.log(num));
// find - returns first match
const leer=arr.find(num => num >3)
console.log(leer);


// Mutating => changes original array
// push(),pop(),splice(),sort(),reverse()

// Non-mutating
// map(), filter(), slice(), concat()

// Implementing map() manually

function customMap(arr, callback){
  let result = [];
  for(let i=0; i< arr.length; i++){
    result.push(callback(arr[i], i));
  }
  return result;
}
console.log(customMap([1,2,3], x => x * 2));

// REMOVE DUPLICATES
let nums = [1,2,2,3,4,4];
let unique = [...new Set(nums)];
console.log(unique);

// Set is a built-in Js object that stores unique values only
// new setInterval([1,2,2,3,4,4]) -> automatically removes duplicates -> Set {1,2,3,4}

// the spread operator converts the set back into an array
// [...set] -> [1,2,3,4]
let str = "banana"     
let uniqueChars = [...new Set(str)].join('');
console.log(uniqueChars);
// .join('') used to convert them into a single string

// "banana" -> array:['b','a','n','a','n','a']
// new Set(....) -> Set{'b','a','n'} removes duplicates
// [...set] -> ['b','a','n']
// .join('') -> "ban"




// Manually

function removeDuplicates(arr){ 
  let result = [];   // to store unique elements
  for(let i of arr){  // loop through each element in input array
    if(!result.includes(i))  //check if element is not already in result
      result.push(i);     //add if it is unique

  }
  return result;  //return array with no duplicates
}

// COUTN OCCURENCES OF WORDS IN A STRING
function wordCount(str){
  let words = str.toLowerCase().split(/\s+/);
  // converts all characters to lowecase for case-insensitive counting
  // .split(/\s+/) -> Splits the string using any amount of whitespace.
  let count = {};

  for(let word of words){
    count[word] = (count[word] || 0) + 1;
  }
  return count;
}
console.log(wordCount("apple banana apple orange banana apple"));
// if count[word] already exists,increment it
// if not,set it to 1.

// SORT ARRAY OF OBJECTS BY KEY
let people = [
  {
    name: "arun",age:24
  },
  {
    name: "anu",age:42
  },
  {
    name: "max",age:29
  }
];
people.sort((a,b) => a.age - b.age);
// sort()- helps decide the order between 2 elements at a time

// objects
let person = {
  name : "meera",
  age:22
};
person.city = "wayanad";

person.age = 23;

// Nested Objects
let user = {
  name: "Vidhya",
  address: {
    city: "Wayanad",
    state: "Kerala"
  }
};
console.log(user.address.city);

// CONVERT ARRAY to OBJECT
 let ar = [["name", "Vidhya"], ["age", 22]]
 let obj = Object.fromEntries(ar);

 console.log(obj);
 // o/p => {name : "meera" , age:26}
//  Object.fromEntries() takes an array of key-value pairs and converts it into an object

// OBJECT to ARRAY
let arrBack = Object.entries(obj);
console.log(arrBack);
// Object.entries() takes an object and returns an array of key-value pairs.

// DEEP CLONE  A NESTED OBJECT(MANUAL)
function deepClone(obj){
  if(typeof obj !== 'object' || obj === null) return obj;
  let clone = Array.isArray(obj) ? [] : {};
  for(let key in obj){
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}


// USE SPREAD TO MERGE TWO ARRAYS AND REMOVE DUPLICATES
const array1 = [1,2,3]; //array 1
const array2 = [3,4,5]; // array 2
//  3 is repeated in both
const merged = [...new Set([...array1, ...array2])];
// ... is called the spread operator
// It spreads the values of the arrays
// this makes a new array like [1,2,3,3,4,5]

// new Set([...array1, ...array2])
// Set keeps only unique values 
// so new Set({1,2,3,3,4,5}) becomes:
//  Set{1,2,3,4,5}

// [...new Set([...array1, ...array2])]
// this spreads the Set back into an array
// now it becomes [1,2,3,4,5]
console.log(merged);

// WRITE A FUNCTION USING DESTRUCTURED PARAMETERS
  // Usually objects are passed to function is like
  // function greet(person)
  // {
  // console.log(person.name);
  // console.log(person.age);
  // }
  function greet({name,age}){
    // here pulls out "name" and "age" directly from the object
    // Inside this function we can use "name" and "age" directly -no need for person.name
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  greet({ name: "Riya", age: 22});
  // we are passing an object so the function see:
  // name = "Riya"
  // age = 22


  // Destructuring => shortcut to pull out values from an object in the function parameter itself.

  // REUSABLE MATH UTILITIES MODULE(IMPORT/EXPORT)
   
  // "export" makes each function available outside this file
  export function add(a,b){
    return a + b;
  }
  export function subtract(a,b){
    return a - b;
  }
  export function multiply(a,b){
    return a * b;
  }

  export function divide(a,b){
    if(b === 0) throw new Error("Division by zero");
    return b !== 0 ? a/b : null;
  }

  // Asynchronous JavaScript
  // a) Simulate API Call Using setTimeout
  function fakeApiCall(){
    setTimeout(() => {
      // setTimeout() is an built in function in javascript
      console.log("Data fetched from API!");
    },2000);
    // waits for 2 seconds, then print that message
  }
  fakeApiCall();
  // waits 2 seconds then logs

// callback
  function getData(callback){
    // here getData  takes one parameter "callback"
    // A callback is just a function you give as an input , to be called later
    setTimeout(()=>{
      callback("Data received!");
    }, 1000);
  }
  // getData takes a callback function as an argument
  // callback inside callback is called callback hell.

  // Promises
// A promise is a built-in javascript object used to handle asynchronous work like API calls or timeouts
function getDataPromise(){
   //here the above function returns a promise  
  return new Promise((resolve) => {
    // creating a new promise
    //  promise has -:
    // 1) resolve ->tells JS this is done successfully
    //  2) reject -> tells JS that something went wrong
    setTimeout(()=>{
      resolve("Data received!");
    }, 1000);
  });
}
getDataPromise().then(console.log);
// .then() is used to handle the result when the Promise is done
// It receives whatever that is passed to resolve(...)

// Chain multiple Promises
// Fetching a user from a server
// fetching that user's posts
// printing the posts

function fetchUser(){
  return new Promise(resolve => {
    setTimeout(() => resolve ({userId: 1}), 1000);
  });
}
function fetchPosts(user){
  return new Promise(resolve =>{
    setTimeout(()=> resolve ([`post for user ${user.userId}`]),1000);
  });
}
fetchUser()
.then(user => fetchPosts(user))
.then(posts => console.log(posts));

// Retry a Failed Promise 3 Times Before Rejecting

// An unstable API that randomly suceeds or fails
// A retry mechanism that tries the API upto to 3 times if it fails
// It logs success if the call works, or an error after 3 failed attempts
function unstableApiCall(){
  return new Promise((resolve, reject)=>{
    const success = Math.random() > 0.7;
    setTimeout(()=>{
      success ? resolve("Success!") : reject("Failed!");
    }, 500);
  });
}
// After 0.5 seconds delay, either:
// resolve("Success!") - if success
// reject("Failed!") - if failed


// The Retry Function

function retry(apiFunc, retries = 3){
  // apiFunc => the unstable API function
  // retries -> how many times to try (default is 3)
  return new Promise((resolve, reject) =>{
    function attempt(n){
      // it starts trying using the inner function attempt(n)
      apiFunc() //if apiFunc() succeeds, it resolves.
      .then(resolve)
      // if it fails, it checks if n is 0
      .catch(err => {
        if(n=== 0){
          reject("All retries failed");
        }
        else{
          console.log(`Retrying...(${3 - n + 1})`);
          // n is the number of retries remaining
          // 3 is the total number of retries  started with
          // 3 - n + 1 => represents how many times you have retried so far, not how many are left
          attempt(n-1);
        }
      });
    }
    attempt(retries);
  });
}
retry(unstableApiCall).then(console.log).catch(console.error);
// retry(unstableApiCall) this starts retry process
// if successful in any attempt -> prints "Successs!!"
// if all attempts fail -> prints "All retries failed"

// DOM MANIPULATION & EVENTS

const btn = document.querySelector("#myBtn");
const allItems = document.querySelectorAll(".item");
const input = document.getElementById("myInput");
// querySelector() => Selects the first matching element(CSS selector).
// querySelectorAll() => Selects all matching elements.
// getElementById()/ getelementByClassName() -> Older methods.

// CHANGING CONTENT AND STYLES
const heading = document.querySelector("h1");
heading.textContent = "Updated Text";
// element.textContent or innerHTML -> Change text or HTML inside.
heading.style.color = "red";
// element.style -> Directly changes styles

// ADDING EVENT LISTENERS
const btnn = document.querySelector('#clickBtn');

btnn.addEventListener("click", ()=> {
  // element.addEventListener('event',function)
  // Common events : click, input, submit, mouseover
  alert("Button clicked!");
});

// CREATING / REMOVING ELEMENTS
const newItem = document.createElement("li");
newItem.textContent = "New Task";
document.querySelector("ul").appendChild(newItem);

// REMOVE
newItem.remove();