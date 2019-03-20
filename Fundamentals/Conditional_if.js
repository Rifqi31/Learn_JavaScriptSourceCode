// modern way modern tradition
"use strict";

// the "if" statement
// the way 1
let year = 2019;
if (year == 2019) {
	alert("Time to hijrah");
	alert("God please protect me from insanity");
	alert("and make money from halal way");
}

// pass pre-evaluated
// the way 2
let thisyear = (year = 2019)
if (thisyear) {
	alert("test from pass pre-evaluated");
}

// the "else" clause
let hope = null;
let selfpromised = (hope = 2019)
if (selfpromised) {
	alert("I hope this year, I will become good person, \nfrom my mom, and dad, \ninsyaallah");
} else {
	alert("There is still hope, because god Alla know best, and best planner in the universe");
}

// several condition "else if"
let dua = undefined;
let selfhope = (hope = "future");
let selfspirit = (dua = "present");

if (selfhope) {
	alert("I hope this year, I will become good person, \nfrom my mom, and dad, \ninsyaallah");
} else if(selfspirit) {
	alert("dzikir, after pray, and the day and the night, insyallah");
} else {
	alert("There is still hope, because god Alla know best, and best planner in the universe");
}

// Ternary '?' operator
let myage = 23;
let antumbaligh = (myage >= 17) ? alert("fulan baligh") : alert("belum baligh");
/*
let antumbaligh = null;
if (myage >= 17) {
	alert("fulan baligh");	
} else {
	alert("belum baligh");	
}
*/

// mulitple '?' ternary operator
let mentality = 50;
let selfstat = (mentality == 100) ? alert("strong enough!") :
	(mentality >= 75) ? alert("normal person with such good seminar") :
	(mentality >= 60) ? alert("normal person") : 
	(mentality >= 50) ? alert("dude just pray!") :
	alert("just calm and rethinking");