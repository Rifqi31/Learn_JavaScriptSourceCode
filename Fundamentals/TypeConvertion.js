// Type Convertion
/*
* from boolean to string
*/
// To String
let rightvar = true; // this is boolean
console.log(rightvar);
console.log(typeof rightvar);

convert_type = String(rightvar); // convert to string become "true"
console.log(convert_type);
console.log(typeof convert_type);


/*
* from string to number
*/
let fakenumbertype = "12345";
console.log(fakenumbertype);
console.log(typeof fakenumbertype);

convert_type2 = Number(fakenumbertype);
console.log(convert_type2);
console.log(typeof convert_type2);

/*
* from number to boolean
*/
let numbervar1 = 1;
let numbervar2 = 0;

convert_to_bool1 = Boolean(numbervar1);
convert_to_bool2 = Boolean(numbervar2);

console.log(typeof convert_to_bool1);
console.log(typeof convert_to_bool2);