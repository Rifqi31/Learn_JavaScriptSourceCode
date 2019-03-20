// learn function
"use strict";

// basic function
function learnfirtone() {
	alert("Hello This is function");
}

learnfirtone();
learnfirtone();

// local variable 
function localvar() {
	let local = 23;
	alert(`your age is ${local}`);
}
localvar();

// outer variable
let outer = "outer var yo!";
function outervar() {
	alert(`this is in the function | ${outer}`);
}
alert(`this is from outside function | ${outer}`);
outervar();

// param function
function paramfunc(message) {
	alert(message);
}
paramfunc("hello this is function with param");

// param function with default value
function paramfunc2(message = "hello There!") {
	alert(message);
}
paramfunc2();

// retun value in function
function backtovalue(height, wide) {
	return(height * wide);
}
alert(backtovalue(20, 5));

// self describing function
function showPrime(number) {
	for(let divider = 2; divider <= number; divider++) {
		if(!isPrime(divider)) continue;

		alert(divider);
	}
}

function isPrime(number) {
	for(let divider = 2; divider <= number; divider++) {
		if(number % divider == 0) return false;
	}
	return true;
}

showPrime(20);
