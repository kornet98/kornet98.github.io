function outer() {    //
	let start = Date.now();  // 
	let num = 1;             // 
	return function inner(msg) {  // 
		console.log(num++ + ". " + (Date.now() - start) + " ms " + msg);
	};
};
let log = outer();


/*
// inner Lexical Environment
{}

// outer Lexical Environment
{ count: 0, inner: fn }

// global Lexical Environment
{ outer: fn, log: fn, ... }
*/

export { log };