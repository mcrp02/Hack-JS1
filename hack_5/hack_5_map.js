/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let conteo = [7,5,3,1];

conteo.map(n => result.push(n)); 


//export result
module.exports = result;
console.log(result);