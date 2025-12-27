//scope- functional scope and global scope

//functional scope - function ke andhar hi use kar sakthe hai
//global scope - poore code mein kahi bhi use kar sakthe hai
//block scope - {} curly braces ke andhar hi use karte hai

//execution context- jo bhi code run ho raha hai uske liye jo data available hai usko execution context kehte hai
//memory phase and excution phase


//Js -lexical scoping - It means that the scope or what can be accessed depends on determined by its physical placement in the code
function abcd(){
    var a= 10;//lexical scope
    function defg(){
        console.log(a);
    }
}
//dynamic scoping- 
let a = 12;
function abcd(){
    console.log(a);
}
function defg(){
    let a =10;
    abcd();
}
defg(); //output -12
//If the js was dynamically scoped then the output would be printed as 10 but when it calls for abcd function it checks for the variable a inside function if it doesnt found then it looks in global but not in defg
