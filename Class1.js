let obj = {
  name: "teenu",
  id: 9,
  city: "del",
};

// function createObj(name,id,city){
//   this.name=name;
//   this.city=city;
//   this.id=id;
// }

//class inheritance

class Detail {
  constructor(age, role) {
    this.age = age;
    this.role = role;
  }
}

// let d1 = new Detail(25,"dev");
// console.log(d1);

class CreateObj extends Detail {
  constructor(name, id, city = "del", age, role) {
    super(age, role);
    this.name = name;
    this.city = city;
    this.id = id;
  }
}

let User1 = new CreateObj("syed", 9, "hyd", 25, "dev");

console.log(User1);
