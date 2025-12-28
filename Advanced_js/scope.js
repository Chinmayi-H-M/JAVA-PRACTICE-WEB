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



//Closure - if the child fumnction is able to access the parent function variable even after the parent function has been executed then this feature is called closure
function parent(){
    let a =10;
    return function child(){
        console.log(a);
    }
}

function countForMe(){
    let c=0;
    return function(){
        c++;
        console.log(c);
    }
}
let fnc=countForMe();
fnc();
fnc();
fnc();

let fnc2=countForMe();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();

function clickLimiter(){
    let click=0;
    return function(){
        if(click<5){
            click++;
            console.log(`clicked: ${click} times`);
        }
        else{
            console.log("Click limit exceeded try after sometime");
        }
    }
}
let fnc1=clickLimiter();
fnc1();
fnc1();
fnc1();



function createToaster(config){
    return function(notification){
        let div =document.createElement("div");
        div.className= `fixed ${config.theme==="dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none
        ${config.positionX==="right" ? "right-5" : "left-5"}`;
        div.innerHTML=notification;
        document.body.appendChild(div);
        setTimeout(()=>{
            document.body.removeChild(div);
        },config.duration*1000);
    }
}

let toaster = createToaster({
    positionX:"left",
    positionY:"top",
    theme:"dark",
    duration:3,
})
toaster("This is a dummy notification");
