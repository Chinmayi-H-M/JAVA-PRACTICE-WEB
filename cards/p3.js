//new cards create karna hai, data local storage mein save karna hai
//localstorage se hi cards ko show karna hai
//buttons ko handle karna hai
//filters ko handle karna hai
const tasks = [];

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
let selected = false;

addNoteBtn.addEventListener("click", function () {

    formContainer.style.display = "initial";
    noteWrapper.style.display = "none";
})

closeBtn.addEventListener("click", function () {
    formContainer.style.display = "none";
    noteWrapper.style.display = "block";
})

form.addEventListener("submit", function makeValidation(Event) {
    Event.preventDefault();
    if (imageUrlInput.value.trim() === "" && fullNameInput.value.trim() === "" && homeTownInput.value.trim() === "" && purposeInput.value.trim() === "") {
        alert("Please fill in all the fields appropriate information.");
        return;
    }
    categoryInputs.forEach(function (cats) {
        if (cats.checked) {
            selected = cats.value;
        }
    })
    if (!selected) {
        alert("Please select a category.");
        return;
    }

})