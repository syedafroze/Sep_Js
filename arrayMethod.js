let arr = [13,24,10,5,16];


//console "true" only when all values are less than 10 

let res = arr.every((value)=> value<10);
console.log(res);


//if anyone value is satisfying the condition then return true 
//else return false 


let res2 = arr.some((val)=>val<10); //true  



//collect the array values whch are greater than 20 in a new array 

let arr2 = [40,21,15,67,40]; //[40,21,67,40]

let res3 = arr2.filter((val)=>val>20);
console.log(res3);



let arr4=[5,4,3];

let res4 = arr4.slice(0); 


console.log(res4); //[10,8,6]

