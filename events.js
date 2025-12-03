//When we do anyting in the browser that raises the events
//event matlab hota hai koi action hua
//event listener ka matlab hai aapne koi action ka reaction diya
let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
    h1.style.color="red";
})
function dblclick(){
    h1.style.color="green";
}
h1.addEventListener("dblclick",dblclick);
h1.removeEventListener("dblclick",dblclick);
let input = document.querySelector("input");
input.addEventListener("input",function(){
    console.log("typed");
});

