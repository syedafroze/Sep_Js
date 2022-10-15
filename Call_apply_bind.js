let User = {
  name: "syed",
  id: 9,
  city: "hyd",
};

let Office = {
  name: "INCEDO",
  city: "Del",
};

function getName(msg) {
  return this.name + " " + msg;
}

//call,apply,bind

//let res = getName.call(Office,"argument","msg2","msg3");
//let res = getName.apply(Office,["argument","msg2","msg3"]);

let res2 = getName.call(User, "msg1");

let res3 = getName.call(User, "msg2");

let binded = getName.bind(User);

// function

let res4 = binded("msg2");
let res5 = binded("msg3");
console.log(res4, res5);
