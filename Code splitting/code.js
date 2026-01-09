import { createElement } from "react";

const btn = document.querySelector("button");

btn.addEventListener("click",async function(){
    let heavy = await import("./heavy.js");
    heavy.veryHeavy();
})

//In this the dom will reload and it causes the website to lag
const ul= document.querySelector(ul);
for (let i=0;i<100;i++){
   const li= createElement("li");
   li.textContent = i;
   ul.appendChild();
}