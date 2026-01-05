//iife
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
})();