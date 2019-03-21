// modern way
"use strict";

// "this" method
// style 1
let user = {
	name : "Rifqi Muttaqin",
	age : 23,

	calluser() {
		alert(this.name);
	}
}
// output
user.calluser()



// style 2
let datauser1 = { name : "Tomoku", age : 21 }
let datauser2 = { name : "Aoi", age : 23 }

// call name properties from datauser1 and datauser2
function callData() {
	alert(this.name);	// because same properties
}

// use the same function in the object
datauser1.say = callData;
datauser2.say = callData;

// style 1
datauser1.say();	// Tomoku
datauser2.say();	// Aoi

// style 2
datauser1['say']();
datauser2['say']();
