/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let conteo = [1,2,3,4];

result = conteo.map(n => {
    return n * 2 - 1;
});


//export result
module.exports = result;
console.log(result);