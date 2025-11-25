//words vs keywords
//const,let var line by line comparison
var a=(23*12)+8;
//declarations and initializations
var a; //declare 
a=12; //initialize
var a=12; //declare and initialize
//var window mein add hota hain
//functions scoped hota hai
//aap firse delare saktha ho and error nahi aayega
function abcd(){
    if(true){
        var a=100;
    }
    console.log(a);
}//in other langages the varianle declared in the if block only accessible only in that one block but using var we can use it anywhere in the function 
//let is a block scoped variable
//scope(global,function,block)


//reassignment and redeclaration 
var a=12;
a=32;
var a=45;

let a=3;
a=8;
//let a=9; //error redeclaration not allowed

//temporal dead zone
console.log(a);

//Hoisting impact per type
//hoisting ->ek variable ko jab js mein banaate hai to wo variab edo hisso mein ttot jaata hai and uska declare part upar chalaa jaata hai and uska initialization part neeche reh jata hai
var a=12;
//this will be divided as var a=undefined;//this is goes to top 
a=12; // thisis another line
