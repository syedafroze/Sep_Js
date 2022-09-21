//index    0  1  2  3
//let arr = [2, 4, 1, 5];

// let res = [];

// for (let j = 0; j < arr.length; j++) {
//   let sum = 0;

//   for (let i = j; i < arr.length; i++) {
//     sum = sum + arr[i];
    
//   }
//   let arr2=[];
//   arr2[i] = sum ;
//   res.push(sum);
// }
// console.log(res);

/*
//arr =[2 , 4,1,5]

res=[]

j=0
sum=0
i=0 
sum = sum + arr[0] = 0+ 2= 2

j=0
i=1
sum = sum + arr[1] = 2 + 4 = 6

j=0
i=2
sum = sum + arr[2] = 6+1 = 7

j=0 
i=3

sum = sum + arr[3] = 7+ 5 = 12

j=0
i=4

res.push(12);

[12]



j=1 
sum =0


*/



//         0  1  2  3 
let arr = [2, 4, 1, 5];

//[12,10,6,5]

let sum =0;

//   i= 3            ;0>=0          
for(let i= arr.length-1;  i>=0; i--)
{  
  sum  = sum + arr[i] ;//sum = 10 + arr[0] = 10+2  = 12
  arr[i] = sum; //arr[0] = 12  
}
console.log(arr);


/*
teenu - [2,6,7,12]
charu -[2,6,7,12]
tejaswini - [2,6,7,12]

*/