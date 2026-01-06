//iife
//modular pattern
/*let Bank = (function(){
    let bankBalnce =12000;

    function checkBalance(){
        console.log(bankBalnce);
    }

    function setBalance(val){
        bankBalance=val;
    }

    function withdraw(val){
        if(val<=bankBalnce){
            bankBalnce-=val;
            console.log(bankBalnce);
        }
    }
    return {
        checkBalance,
        setBalance,
        withdraw,
    },
})();*/

//Revealing pattern
let Bank = (function(){
    let bankBalnce =12000;

    function checkBalance(){
        console.log(bankBalnce);
    }

    function setBalance(val){
        bankBalance=val;
    }

    function withdraw(val){
        if(val<=bankBalnce){
            bankBalnce-=val;
            console.log(bankBalnce);
        }
    }
    return {
        check: checkBalance,
        set: setBalance,
        withdraw: withdraw,
    }
})();


function createProduct(name, price){
    let stock = 10;
    return {
        name,price,buy(qty){
            if(qty<=stock){
                stock-=qty;console.log(`${qty} pieces booked - ${stock} pieces left.`)
            }
            else{
                console.error("Not left required no. of items.")
            }
        },
        refill(qty){
            stock+=qty;
            console.log(`refilled the stock - ${stock} pieces now.`)
        }
    }
}
let iphone = createProduct("iphone", 7000);
iphone.buy(23);



class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`You have subscribed the channel.`)
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !==user);
        user.update(`${user.name}, You have un-subscribed the channel.`);
    }
    notify(message){
        this.subscribers.forEach(sub => sub.update(message));
    }
}
class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(data);

    }
}
let sheryians = new YoutubeChannel();
let user1 = new User("Harsh");

sheryians.subscribe(user1);
