function CreatePencil(name,price,color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(){
        let h1 = document.createElement("h1");
        h1.textContent = `The pencil ${this.name} is writing`;
        document.body.appendChild(h1);
    }
}

let pencil1=new CreatePencil("Nataraj",10,"Yellow","Nataraj Co.");
let pencil2=new CreatePencil("Apsara",5,"Black and white","Apsara co.");