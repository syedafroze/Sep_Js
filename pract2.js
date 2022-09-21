//        0 1 2 3
let arr = [2, 4, 5, 6];
//      4-3 =1

//  ... spread

//...[2,3,4] spread

//arr and object (DS)

//function code  reusability

let arr2 = [0, 1, ...arr];

// arr2 = [0,1,2,4,5,6]

console.log(arr2);

// arrayName.splice(startIndex , no.of elements to be removed);

//remove 5 and 6

// let step = 2;

// let removedValues = arr.splice(arr.length - step ,2);

// let removedValues = arr.splice(arr.length - 3 ,3)

// console.log(removedValues ,arr )
