//new cards create karna hai, data local storage mein save karna hai
//localstorage se hi cards ko show karna hai
//buttons ko handle karna hai
//filters ko handle karna hai
document.addEventListener("DOMContentLoaded",function(){

let addNoteBtn = document.querySelector("#add-note-btn");
let formContainer = document.querySelector(".form-container");
let noteWrapper = document.querySelector(".note-wrapper");
let closeBtn = document.querySelector("#close-btn");
const form = document.querySelector("form");

const imageUrlInput = form.querySelector('input[placeholder="https://example.com/photo.jpg"]');
const fullNameInput = form.querySelector('input[placeholder="Enter full name"]');
const homeTownInput = form.querySelector('input[placeholder="Enter home town"]');
const purposeInput = form.querySelector('input[placeholder="e.g. Quick appointment note"]');
const categoryInputs = form.querySelectorAll('input[name="category"]');

function saveToLocalStorage(obj){
    if(localStorage.getItem("tasks")===null){
        let oldTasks=[];
        oldTasks.push(obj);
        let ol=JSON.stringify(oldTasks);
        localStorage.setItem("tasks",ol);
    }
    else{
        let oldTasks= localStorage.getItem("tasks");
        oldTasks=JSON.parse(oldTasks);
        oldTasks.push(obj);
        let ol=JSON.stringify(oldTasks);
        localStorage.setItem("tasks",ol);
    }
}


addNoteBtn.addEventListener("click", function () {
formContainer.style.display = "initial";
    noteWrapper.style.display = "none";
})

closeBtn.addEventListener("click", function () {
    formContainer.style.display = "none";
    noteWrapper.style.display = "block";
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (imageUrlInput.value.trim() === "" || fullNameInput.value.trim() === "" || homeTownInput.value.trim() === "" || purposeInput.value.trim() === "") {
        alert("Please fill in all the fields appropriate information.");
        return;
    }
    let selected = "";
    categoryInputs.forEach(function (cats) {
        if (cats.checked) {
            selected = cats.value;
        }
    })
    if (!selected) {
        alert("Please select a category.");
        return;
    }

    saveToLocalStorage({
    imageUrl: imageUrlInput.value,
    fullName: fullNameInput.value,
    purpose: purposeInput.value,
    homeTown: homeTownInput.value,
    category: selected
});

    form.reset();

})
});