/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let i =0;

for(; i<arr.length; i++){
    let n = arr[i];
    let firstChar = n.charAt(0).toUpperCase();
    let remainigChars = n.slice(1);
    result.push(firstChar + remainigChars);
}


//export result
module.exports = result;
console.log(result);