// modern way
"use strict";

// loops pattern
/*
part
begin		i = 0			Executes once upon entering the loop.
condition	i < 3			Checked before every loop iteration. If false, the loop stops.
step		i++	Executes 	after the body on each iteration but before the condition check.
body		alert(i)		Runs again and again while the condition is truthy.

Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
*/

// while loops
let startCounter = 1;
while (startCounter <= 10) {
	console.log("this counter at " + startCounter);

	startCounter++;
}

console.log("############");

// do while loops
let startdo = 1;
do{
	console.log("this is from do-while at " + startdo);
	startdo++;
}while(startdo <= 10);

console.log("############");

// for loops
for (let startfor = 1; startfor <= 10; startfor++) {
	console.log("this is from for loops at " + startfor);
}

console.log("############");


// breaking the loops
let startbreak = 100;
while (startbreak >= 1){
	console.log("this is from break at " + startbreak);
	startbreak--;

	if (startbreak == 75) {
		break;
		alert("break! this point anyway");
	}
}

console.log("############");

// continue statement in the loops
let startcontinue = 15;
do{
	console.log("this is from another loops at " + startcontinue);
	startcontinue--; // decrement

	if (startcontinue % 2 == 0) continue;

}while(startcontinue >= 1);

// labels break/continue
backtofuture : for(let count = 0; count < 3; count++) {
	for(let count2 = 0; count2 < 3; count2++) {
		let input = prompt(`the value recorded is (${count}, ${count2})`, '');

		// if empty input from user or canceled, the break the loops
		if(!input) break backtofuture; // mark with lables so can jump back to begining
	}
}
alert("Done!");
