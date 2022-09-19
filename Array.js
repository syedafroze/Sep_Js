//Array -> is a Data structure used to multiple values in one single variable.

let arr = [3, 4, 5];

//push() -> add element to the last index
arr.push(2);
console.log(arr);

//pop() -> used to remove last element
arr.pop();

//shift() -> removes first value

arr.shift();
console.log(arr);

arr.unshift();
console.log(arr);

// sort below array based on string length
//

let arr2 = ["syed", "tejaswini", "saniya", "vikas"];

//bubble sort

let res = [6, 2, 1, 0, 22, 16];

// [0,1,2,6,16,22]

//let sortRes = res.sort();//alphabet sort 
let sortRes = res.sort(function(a,b){return a-b;});//numeric  sort()

//-4


console.log("sortRes", sortRes);

/*
i= 0 j=1
0  1 2 3
[2,6,1,0]

*/

for (let i = 0; i < res.length; i++) {
  for (j = i + 1; j < res.length; j++) {
    if (res[i] > res[j]) {
      //6>2    swapping
      let temp = res[i]; //temp = 6
      res[i] = res[j]; //res[i]= 2
      res[j] = temp; //res[j]= 6
    }
  }
}

console.log(res); // 0 1 2 6

//[0,1,2,6];

//["syed","apple"];

//["apple","syed"]

//["syed","vikas","saniya","tejaswini"]
