let arr = ["syed", "Teenu", "Tejaswini", "charu", "sana"];

let res2 = arr.map((val) => val.toUpperCase());

console.log(res2);

// let Square = function(val){
//  return val*val;
// }

//Arrow function

let Square = (val) => val * val;

console.log(Square(5));

/*
[Syed,TEENU]
 val ="syed " index = 0 
 
*/
//------------------------------------------------
let arr = ["syed", "Teenu", "Tejaswini", "charu", "sana"];

//

let num = 5;

console.log(num.toString());

let str = "567";

//["5","6"]

let strToArr = str.split(""); //[5,6,7]
let ArrayToStr = strToArr.join(""); //"567"
console.log(strToArr);

//[5,67]

console.log(parseInt(str), +str, Number(str));

let res2 = arr.filter((val) => val.length < 5);

console.log(res2);

let res = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length < 5) {
    res.push(arr[i]);
  }
}

console.log(res);

/*
[syed,sana]
true 

*/
