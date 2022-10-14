//Object

//

//Object - its a Data structure which stores data in key values pairs .

let person = {
  name: "syed",
  age: 25,
  id: 25,
  city: "hyd",
};

let Car = {
  name: "City",
  brand: "Honda",
  color: "white",
  start: () => console.log("started"),
};

console.log(Car.start());

//

/*

[{

}]
 


id = 23 
age = 23 


color
brand
fuelType


*/

//constructor

function createUser(name, id, city) {
  this.name = name;
  this.id = id;
  this.city = city;
}

let user1 = new createUser("syed", 8, "hyd");

console.log(user1);

function createUser(name, id, city) {
  this.name = name;
  this.id = id;
  this.city = city;
}

//let user1 = new createUser("syed", 8, "hyd");

let userDetails = [
  {
    name: "syed",
    id: 8,
    city: "hyd",
  },
  {
    name: "teenu",
    id: 9,
    city: "del",
  },
  {
    name: "Charu",
    id: 8,
    city: "hyd",
  },
];

for (let i in userDetails) {
  if (userDetails[i].id == 8) {
    userDetails[i].city = "delhi";
  }
}

let Obj = {
  name: "syed",
  id: 9,
  city: "hyd",
};
// console.log(Obj.name);
//[name,id,city]

for (let i in Obj) {
  console.log(i, Obj[i]);
}

//         0 1 2      2
let arr = [3, 4, 5];

// for(let i=0;i<arr.length;i++){
//   console.log(arr[i])
// }

// // arr[2] = 5

// for(let i in arr){
//   console.log(arr[i])
// }

// for(let i of arr ){
//   console.log(i);
// }

//console.log(userDetails);

//---------------------------------------------------
let Obj2 = {
  name: "syed",
  id: 9,
  city: "hyd",
};
// console.log(Obj.name);
//[name,id,city]
let res = [];
for (let i in Obj2) {
  res.push(i);
}
console.log(res);

let res2 = Object.keys(Obj2);
let res3 = Object.values(Obj2);
console.log(res3);
