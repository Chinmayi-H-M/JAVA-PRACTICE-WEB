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


//Datatypes in js
/*
primitives->aise saare values copy karne par ek real copy milte hai example:string,number,boolen,null,undefined,symbol,bigint
reference->aise saare copy karne se reference milti hai Example: arrays,objects,functions 
''-single quotes
""-double quotes
``-backticks
12 -integer 
12.3 -number 

symbol ->unique identifier 
future mein hum koi libraries use karenge ab is mein un libraries mein kai baar kucch fields hoti hai jisnse similar hum bhi banaa dete hai aur galti se hamari banaai hui fields us library ki original fields ko change kar deta hai
let u1=Symbol('id');
let u2=Symbol("id");
console.log(u1===u2); //false because symbol is unique
let a= 9000097475678482n;
a+2n;
*/

/*Dynamic typing -> js mein static typing nahi hai and yaha par hai dynamic typing hai aap data ko chage kar sakte ho kyunki yaha par dynamic datatypes hai
typeof

type coercion->concept jis mein aapka ek type automatically convert hojaayega

"5"+1=51  here + does two things concat and add it has one string so it concats 
"5"-1=4   here - has one operation only subtraction so it converts str to int
0 false '' null undefined NaN document.all ->falsy values
*/

//Operators in js
/*+ - * / % ** ->arithmetic operators 
= == === < > <= >= ! != !== !! && ||
? :
instanceof used for checking whether an object is an instance of a parent class or not
*/