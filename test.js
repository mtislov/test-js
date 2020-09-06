// Modules / export syntaxis

// variables
export let a = 'a';

let b = 'b';
let c = 'c';
export {b, c};

// class
export class Person {
  constructor( ) {
    this.name = name;
  }
}

// Function
export function sayHello() {
  console.log('Hello!')
}

/* or 

  function sayHello() {
    console.log('Hello!')
  }

  export {Person, sayHello}

*/

// Rename 
export { b as varB};

// default export 
export default function cube(x) {
  return x * x * x;
}


/////////////////////////////
// Modules / import syntaxis

import {b, c} from './file.js';

// import all in 
import * as letters from './file.js'; 
console.log(letters.b, letters.c);  // letters is object 

