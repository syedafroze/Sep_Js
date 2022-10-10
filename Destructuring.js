

let arr = [20,40,50];

let res2 = [...arr];//[20,40,50]
console.log(res2);
// let n1 = arr[0];
// let n2 = arr[1];

let [n1, ...n3] = [20, 40, 50 ,60,70]; 

//Objects 
//
//Spread 

let arr2 = [ 4, 6 , ...arr] ;
console.log(arr2);



console.log(n1,n3);