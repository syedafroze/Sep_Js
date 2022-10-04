let arr = [1,4,2,3];

let arr2 =[4,5,6];

let arr3= [5,6,7];
// 



function SqaureArrayValues(array){

let res = [];
for (let i = 0; i < array.length; i++) {
  res.push(array[i] * array[i]);
}
  return res;
}



 let result = SqaureArrayValues(arr3);

 console.log(result);
 