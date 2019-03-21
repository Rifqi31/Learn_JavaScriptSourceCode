"use strict";

// constructor function
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

// insert "Jack" into User object
let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

