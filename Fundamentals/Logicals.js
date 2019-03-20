// modern way
"use strict";

// logical OR ||
// create table OR ||
let thisvarTrue = true;
let thisvarFalse = false;

console.log("#########");
console.log("true v true = ", thisvarTrue || thisvarTrue);
console.log("false v false = ", thisvarFalse || thisvarFalse);
console.log("false v true = ", thisvarFalse || thisvarTrue);
console.log("true v false = ", thisvarTrue || thisvarFalse);
console.log("#########");

// logocal AND &&
// create table AND &&
console.log("#########");
console.log("true ^ true = ", thisvarTrue && thisvarTrue);
console.log("false ^ false = ", thisvarFalse && thisvarFalse);
console.log("false ^ true = ", thisvarFalse && thisvarTrue);
console.log("true ^ false = ", thisvarTrue && thisvarFalse);
console.log("#########");

// OR can find first trusty value
// let userfind = 31;
let searchthis_trusty = (null || undefined || true || false || "31" || 31);

console.log(searchthis_trusty); // first high value in "true" is true
console.log(typeof searchthis_trusty);

// AND can find first falsy value
let searchthis_falsy = (null && undefined && true && false && "31" && 31);

console.log(searchthis_falsy); // first high value in "false" is null
console.log(typeof searchthis_falsy);

// !NOT
console.log(!true); //become false
console.log(!false); //become true
