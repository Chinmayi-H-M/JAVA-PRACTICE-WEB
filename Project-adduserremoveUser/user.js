let form = document.querySelector("form");
 const userManager ={
    users : [],
    init: function(){
        form.addEventListener("submit",this.submitForm.bind(this));
    },
    submitForm: function(e){
            e.preventDefault();
            console.log("Form submitted");
    },
    addUser: function(){},
    removeUser: function() {},
 };
 userManager.init();