// modern way
"use strict";

// result = boolean

// using number
console.log( 1 < 2); 	// True
console.log( 1 > 2);	// False

// using string
console.log( "RIFQI" > "rifqi");	// False => because in unicode order
// small char is greater than large one
console.log( "IKEA" == "IKEA"); // True
console.log( "Glow" > "Glew"); // True
/*
*	G = G // True because same
*	l = l //  True because same
*	o = e // false stop!!
*/
console.log( "o" > "e" ); // because in unicode "o" is higher than "e"

// comparison in different type
console.log( "1" > 2); //  false "1" become number type is 1 and then 1 is not large than 2

// funny in javascript
let boolzero = 0;		// become false
let stringzero = "0"	// become true because is string

console.log(Boolean(boolzero));
console.log(Boolean(stringzero));

// string equality
console.log(0 ==  false); // True because 0 is equal zero
console.log('' == true);	//  False

// use === for checking data type
console.log("0" === false); // False becaue is different types

// undefined
console.log(undefined == false); // True because undefied become 0 and than compare it
console.log(undefined === false); // False because is different type

// null
console.log(null == undefined); // True 0 equal 0
console.log(null === undefined); // False because different type
 