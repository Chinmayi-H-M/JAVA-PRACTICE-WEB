function debounce(fnc,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fnc(...args);
        },
document.querySelector("input").addEventListener("input",debounce(function(){
    console.log("hey");
},1000));