
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
