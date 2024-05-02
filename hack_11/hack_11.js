/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

result = ["h@ck", ...numberArray.map(n => n ==1?
          "one": n ===3 ? "three" : n ===5 ? "five" : n),
          "h@ck", ...stringArray.map(i => i ==="foo" ?
          "f00" : i ==="bar" ? "Bar": i === "baz" ?
           "b@z" : i === "qux" ? "quX" : "3ch0"), "h@ck"];


//export result
module.exports = result;
console.log(result);