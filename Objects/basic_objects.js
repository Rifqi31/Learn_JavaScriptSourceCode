'use strict';

// user object
let user = {
	name : "Rifqi Muttaqin",
	age : 23,
	status : "Prototype",
	"wkwkw land" : "fcuk"
}

console.log(user.name);
console.log(user.age);
console.log(user.status);

// add value to user
user.Admin = true;

console.log(user.Admin);

// delete age value
// delete user.age;

// animal object
let animal = {}

// set
animal["octopus"] = true

// get
alert(animal["octopus"]); // true

// delete
// delete animal["octopus"];

// square brackets
let key = prompt("what your name ?", "name");

alert(user[key]); // if enter "name" 


// computed properties
let fruit = prompt("which fruit to buy ?", "Apple");
let bag = {};

// take property
bag[fruit] = 5



// property shorthand
function makeUser(name, age) {
	return {
		name : name,
		age : age
	};
}

let result = makeUser("ikun", 23);
console.log(result);

// existence check
console.log("age" in result);			// True 
console.log("blabalalba" in result);	// False


// let user object
for(let key in user) {
	// keys
	console.log(key);
	console.log(user[key]);
}

// ordered like an objects
let codes = {
	"17" : "Indonesian",
	"20" : "England",
	"33" : "Germany"
}

for(let code_result in codes) {
	console.log(code_result);
}

// copying references
let asuka = {name : "asuka"}
let hika = asuka

// let user = { name: 'John' };
// let admin = user;
// admin.name = 'Pete'; // changed by the "admin" reference
// alert(user.name); // 'Pete', changes are seen from the "user" reference

// comparison by reference
let a = {}
let b = a;

let checkvalue = (a == b) ? true : false;
console.log(checkvalue);

let checktype = (a === b) ? true : false;
console.log(checktype);


// const object
const korean = {
	name: "taeyon"
}

console.log(korean.name);


// cloning and merging, object.assign
// cloning
let original = {
	name : 'Aioi'
}

// clone the object
let clone = {}

// copy from original to clone object
for(let key in original) {
	clone[key] = original[key];
}

// now data from original to clone has been copied
clone.name = "Tomoku"; // change the data in it
console.log(clone.name);

console.log(original.name); //  still Aioi


// merging, object.assign
// use original object

let permission1 = { canView: true }
let permission2 = { canEdit: true }

// copies all from permission1 and permission2 into original
let merge_data = Object.assign(original, permission1, permission2);
console.log(merge_data);

// merge and overwrite, and add isAdmin
let merge_overwrite = Object.assign(original, { name: "konco", isAdmin: true});
console.log(merge_overwrite);

