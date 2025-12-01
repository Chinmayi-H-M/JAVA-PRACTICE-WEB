/*let abcd = document.getElementsId("abcd");
console.log(abcd);
let abc= document.getElementsByClassName("abcd");
console.log(abc);
let ab=document.querySelector(".abcd");*/
let h1=document.querySelector("h1");
h1.textContent="Hello Chinmayi CEO of Google";
h1.innerHTML="<i>Hello Chinmayi CEO Of google</i>"
let a= document.querySelector("a");
a.href="https://omnicognitoo.blogspot.com";
a.setAttribute("href","https://omnicognitoo.blogspot.com");
let img = document.querySelector("img");
img.setAttribute("src","https://plus.unsplash.com/premium_photo-1764435536930-c93558fa72c6?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
console.log(a.getAttribute("href"));
a.removeAttribute("href");

let h1=document.createElement("h1");
h1.textContent="This is created by JS";
document.body.appendChild(h1);
