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

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#email-error").textContent="Email is incorrect";
    document.querySelector("#password-error").textContent="Password is incorrect";
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!(emailRegex.test(email.value))){
        document.querySelector("#email-error").textContent="Email is incorrect";
    }
    if(!(passwordRegex.test(password.value))){
        document.querySelector("#password-error").textContent="Password is incorrect";
    }


})
