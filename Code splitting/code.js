
const btn = document.querySelector("button");

btn.addEventListener("click",async function(){
    let heavy = await import("./heavy.js");
    heavy.veryHeavy();
})

//In this the dom will reload and it causes the website to lag
//const ul= document.querySelector(ul);
/*for (let i=0;i<100;i++){
   const li= document.createElement("li");
   li.textContent = i;
   ul.appendChild(li);
}

const ul= document.querySelector(ul);
const space = document.createDocumentFragment();// this will resolve the issue
for (let i=0;i<100;i++){
   const li= document.createElement("li");
   li.textContent = i;
   space.appendChild(li);
}
ul.appendChild(space);*/

//Time leeking
let count =0;
const int = setInterval(() => {
    if(count<10){
        count ++;
        console.log(count);
    }
    else{
        clearInterval(int);//If we didnt write the clearInterval then it will keep on running but it doesn't print anything because already if consditon became false
        console.log("Finished");
    }
}, 500);



const btn1= document.querySelector("#ulbtn");
const ul1 = document.querySelector("#addul");
function add(n1,n2){
    return n1+n2;

}
btn1.addEventListener("click", function(){
    const num1= Math.floor(Math.random() *10);
    const num2= Math.floor(Math.random() *10);

    let finalAdd = add(num1,num2);

    let li = document.createElement("li");
    li.textContent = finalAdd();
    ul1.appendChild(li);
})

//custom map function
function myMap(arr,callback){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        newarr.push(callback(arr[t],i,arr));
    }
    return newarr;
}
 let ans = myMap(arr,function(val){
    return val+2;
 })


 //Call stack execution stack
 //JS single threaded hai -> ek time par ek hi kaam karta hai
 //Jab tum function call karte ho -> wo stack ke top pe chala jata hai
 //Function complete hone ke baad stack se nikal jata hai (pop ho jata hai);
 function a(){
    console.log("a");
 }
 function b(){
    a();
    console.log("b");
 }
 function a(){
    b();
    console.log("c");
 }
 c();