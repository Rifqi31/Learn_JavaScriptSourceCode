// modern way
"use strict";

// declarative function
function sayHi() {
	alert("Hello World!");
}

// expression function
let hello = function () {
	alert("this is expression function");
}

hello();

// callback method, passing function as a value
function ask(question, yes, no) {
	if(confirm(question)) yes()
	else no();
}

// function showOK() {
// 	alert("this is will be ok");
// }

// function showCancel() {
// 	alert("you canceled the argument");
// }


// ask(promp(string), param1_ok, param2_cancel)
// ask("Do You Agree with this situations ?", showOK, showCancel)

// shorted way
ask("Do You Agree with this situations ?",
	function() { alert("this is wil be ok") },
	function() { alert("you canceled the argument") }
);

// Arrow functions
// let varname = (param1, param2...) => expression
let plusTwonumber = (a, b) => a + b;

alert(plusTwonumber(10,10));

// example multiple line
let askarrow = (question, yes, no) => {
	if(confirm(question)) yes()
	else no();
}

askarrow("Are you sure ?",
	() => alert("ya I'am, god power!!!"),
	() => alert("no I'm not sure!!")
);