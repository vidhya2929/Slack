// "import" keyword is used to bring code(like functions,variable, or classes)from one file into another file
// Useful when you have multiple files and you want to reuse the code without repeating it.
import {add, subtract} from `./test.js`;
console.log(add(5,3));
console.log(subtract(5,3));

// if we want to import everything from the file,
import * as math from './test.js';
console.log(math.add(5,3));
console.log(math.multiply(5,3));


// To use import and export make sure:
// HTML uses type="module":
{/* <script type="module" src="test.js"></script> */}
