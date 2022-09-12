/*
if 
else if
else 

if(condition){
    //code 
}


switch case 

ternary operator 

*/
let num = 15;

//assignent operator
// ==

if (num < 10) {
  console.log("Won");
} else if (num == 10) {
  console.log("Draw");
} else {
  console.log("Lost");
}

if(num<10){
    console.log("Won")
}
else{
    console.log("lost")
}

num<10 ? console.log("Won") : console.log("Lost") ;

//condition ? condition ? true: false : false

//switch case  +- */ 

//ME -> 5 + 6  (5,6 operands    + operator)

let n1 = 5; 
let n2 = 10;
let opr = "-";

//-5

// 

switch(opr){
    case "+" : console.log(n1+n2);break;
    case "-" : (n1<n2)?console.log(n2-n1):console.log(n1-n2);break;
    case "*" : console.log(n1*n2); break;
    default : console.log("invalid operation");
}

