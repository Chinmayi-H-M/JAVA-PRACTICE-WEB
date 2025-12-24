//new cards create karna hai, data local storage mein save karna hai
//localstorage se hi cards ko show karna hai
//buttons ko handle karna hai
//filters ko handle karna hai

let addNoteBtn = document.querySelector("#add-note-btn");
let formContainer = document.querySelector(".form-container")

addNoteBtn.addEventListener("click",function(){

    formContainer.style.display = "initial";
})