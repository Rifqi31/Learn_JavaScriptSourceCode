// learn switch
"use strict";

// only string
let userselect = prompt("insert number menu :");
// ask the user
alert(userselect);

switch(userselect) {
	// "number" because prompt only process string type to use it
	case "1":
	case "2":
		let counter_case12 = 1
		do{
			console.log("this loop |do whle| come from case 1 & 2 at " + counter_case12);
			counter_case12++;
		}while(counter_case12 <= 10);
		break;

	// if user select number type is 3 than default case is true
	case 3:
		let counter_case3 = 1
		while(counter_case3 <= 10) {
			console.log("this loop |while| come from case 3 at " + counter_case3);
			counter_case3++
		}
		break;

	case "4":
		for(let counter_case4; counter_case4 <= 10; counter_case4++) {
			console.log("this loop |for| com from case 4 at " + counter_case4);
		}
		break;

	default :
		alert("out of number or empty");
}