//function ->  

let marks = [40,50,40,20,30];


//20 

//function declaration


function Average(marks){
    
    let sum =0;

    for(let i=0;i<marks.length ;i++){
        sum = sum + marks[i];
    }

    let Avg = sum/marks.length;
    
     return [Avg,marks.length] ;//30
}


let marks2 = [30,40,50,10,20];

let result = Average(marks2);// function call



console.log(result );//[30,5]



//Average([40, 50, 40, 20, 30]);

//charu 
//

//Average => sum of values/ no.of values 

//Average = 180 / 5 => 36



function A(){
  
  function B(){
    
    return "Done"
  }
  
  
 
 return B();//done

}


let res = A()() ;//currying function

//res = B

console.log(res);



//teenu - B
//charu -  B
//tejaswini - undefined

///b()


function add(a,b){
  let count = 10;
  var c = a + b;//7  
  
   function diff(){
         let num = 5;
         return c;//7
   }

   console.log(diff());//7
  
   return c;//
  
}

console.log(add(3,4));//7

