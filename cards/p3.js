//new cards create karna hai, data local storage mein save karna hai
//localstorage se hi cards ko show karna hai
//buttons ko handle karna hai
//filters ko handle karna hai

let addNoteBtn = document.querySelector("#add-note-btn");
let formContainer = document.querySelector(".form-container");
let noteWrapper = document.querySelector(".note-wrapper");
let closeBtn = document.querySelector("#close-btn");

addNoteBtn.addEventListener("click",function(){

    formContainer.style.display = "initial";
    noteWrapper.style.display = "none";
})

closeBtn.addEventListener("click",function(){
    formContainer.style.display = "none";
    noteWrapper.style.display = "block";
})