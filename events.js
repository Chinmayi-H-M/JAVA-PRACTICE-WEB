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
let h1=document.querySelector("h1");
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
    console.log(dets.target.files[0].name);
    btn.textContent=dets.target.files[0].name;

})

