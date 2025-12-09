// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     if(nm.value.length <= 2){
//         document.querySelector("#hide").style.display = "block";
//     }
//     else{
//        document.querySelector("#hide").style.display = "none";
//     }
// })
//regex code to check the valid email,username can be used


let c = 0;
let seconds =10;
let progress = document.querySelector(".progress-bar");
let percentText= document.querySelector("#progress-text");

setInterval(function(){
    if(c <= 99){
        c++;
        progress.style.width=`${c}%`;
        percentText.textContent=`${c}%`;
    }
},(seconds*1000)/100);

