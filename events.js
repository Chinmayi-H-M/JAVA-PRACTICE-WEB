//When we do anyting in the browser that raises the events
//event matlab hota hai koi action hua
//event listener ka matlab hai aapne koi action ka reaction diya
/*let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
    h1.style.color="red";
})
function dblclick(){
    h1.style.color="green";
}*/
/*h1.addEventListener("dblclick",dblclick);
h1.removeEventListener("dblclick",dblclick);
let input = document.querySelector("input");
input.addEventListener("input",function(){
    console.log("typed");
});*/
/*let inp = document.querySelector("input");
inp.addEventListener("input",function(dets){
    if(dets.data!==null){
        console.log(dets.data);
    }
});
//tab chaltha hai jab aapka koi input select ya textarea mein koi changes hojaaye
let sel=document.querySelector("select");
let device=document.querySelector("#device");
sel.addEventListener("change",function(dets){
    console.log(dets.target.value);
    device.textContent="Device Selected";
    device.textContent=`${dets.target.value} device selected`;
})*/
/*let h1=document.querySelector("h1");

window.addEventListener("keydown",function(dets){
    if(dets.key===" "){
        h1.textContent="spc";
    }
    else{
        h1.textContent=dets.key;
    }
    console.log(dets.key);
})
let btn=document.querySelector("#btn");
let input=document.querySelector("#fileinp")
btn.addEventListener("click",function(){
    input.click();
})
input.addEventListener("change",function(dets){
    //console.log(dets.target.files[0].name);
    const file = dets.target.files[0];
    if (file){
       btn.textContent=file.name;
    }
})*/
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main= document.querySelector("#main");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    // console.log(inputs[0].value,
    //     inputs[1].value,
    //     inputs[2].value,
    //     inputs[3].value,
    let card = document.createElement("div");
    card.classList.add("card");
    let profile =document.createElement("div");
    profile.classList.add("profile");
    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);
    let h3= document.createElement("h3");
    h3.textContent=inputs[1].value;
    let h5= document.createElement("h5");
    h5.textContent=inputs[2].value;
    let p= document.createElement("p");
    p.textContent=inputs[3].value;
    profile.appendChild(img);

    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);
    inputs.forEach(function(inp){
        if(inp.type!=="submit"){
            inp.value="";
        }

    }
    );
});


let f = document.querySelector("form");
let i = document.querySelectorAll("input");
let m= document.querySelector("#main");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    // console.log(inputs[0].value,
    //     inputs[1].value,
    //     inputs[2].value,
    //     inputs[3].value,
    let card = document.createElement("div");
    card.classList.add("card");
    let profile =document.createElement("div");
    profile.classList.add("profile");
    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);
    let h3= document.createElement("h3");
    h3.textContent=inputs[1].value;
    let h5= document.createElement("h5");
    h5.textContent=inputs[2].value;
    let p= document.createElement("p");
    p.textContent=inputs[3].value;
    profile.appendChild(img);

    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);
    inputs.forEach(function(inp){
        if(inp.type!=="submit"){
            inp.value="";
        }

    }
    );
});

let abcd = document.querySelector("#abcd");
abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow";
});
abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red";
})
window.addEventListener("mousemove",function(dets){
    //console.log(dets.clientX,dets.clientY);
    abcd.style.top = dets.clientX + "px";
    abcd.style.left = dets.clientY + "px";
})


