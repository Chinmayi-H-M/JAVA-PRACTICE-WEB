class CreatePencil{
    constructor(name,price,color,company){
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
    }
    erase(){
        document.body.querySelectorAll("h1").forEach((element) => {
            if(element.style.color === this.color){
                element.remove();
            }
        })
    }

    write(text){
        let h1= document.createElement("h1");
        h1.textContent = text;
        h1.style.color= this.color;
        document.body.appendChild(h1);
    }
}

let p1= new CreatePencil("Nataraj",10,"Yellow","Nataraj Co.");
let p2= new CreatePencil("Apsara",5,"Black and white","Apsara co.");



//Extends and super keyword 

class User{
    constructor(name,address,username,email){
        this.name= name;
        this.address = address;
        this.username = username;
        this.email=email;
        this.role="User";
    }
    write(text){
        let h1= document.createElement("h1");
        h1.textContent = `${this.name} says ${text}`;
        document.body.appendChild(h1);
    }
}
class Admin extends User{
    constructor(name,address,username,email){
        super(name,address,username,email);
        this.role="Admin";
    }
}

let u1 = new User("Chidu","Hyd","Chidu@123","chidu@gmail.com")
let a1 = new Admin("Chinmayi","Mandya","hmschinmayi","hmschinmayi.com")
let u2 = new User("Rahul","Bangalore","rahul123","rahul@gmail.com")


//prototypal inheritance and classical inheritance

let coffee ={
    color: "dark",
    drink: function(){
        console.log("Drinking "+this.color+" coffee");
    }

}

let arabiataCoffee = Object.create(coffee);
arabiataCoffee.strength = "Strong";
console.log(arabiataCoffee.drink());


//Sync and Async in JS

function sysncFunction(){
    setTimeout(() => {
        console.log(val);

    },Math.floor(Math.random()*10));
}
for(let val=1; val<=10; val++){
    sysncFunction();
}

function profileFetch(username,cb){
    setTimeout(() => {
        cb({_id:12122, username,age:26,email:huihui.com});
    }, 2000);
}

function FetchPosts(id,cb){
    setTimeout(() => {
        cb([{title:"Post 1",content:"Content 1"},{title:"Post 2",content:"Content 2"}]);
    }, 3000);
}

function FetchSavedPosts(id,cb){
    console.log("Fetching saved posts....");
    setTimeout(() => {
        cb({_id:id, saved:[1,2,3,4,5]});
        
    }, 3000);
}

profileFetch("chinmayi",function(data){
    console.log(data);
    FetchPosts(data._id,function(posts){
        console.log(posts);
    })
    FetchSavedPosts(data._id,function(savedPosts){
        console.log(savedPosts);
    })
})
